using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Shared_document_web.Web.Controllers
{
    using BLL;
    using Common.Rsp;
    using Common.Req;
    using Microsoft.AspNetCore.Hosting;
    using System.IO;
    using Shared_document_web.DAL.Models;
    using Microsoft.AspNetCore.StaticFiles;
    using Shared_document_web.DAL.ViewModels;
    using System.Collections.Generic;

    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        public DocumentController(IWebHostEnvironment hostEnvironment)
        {
            _svc = new DocumentSvc();
            _hostEnvironment = hostEnvironment;
        }

        [HttpPost("get-by-id")]
        public IActionResult getDocumentById([FromBody] SimpleReq req)
        {
            var res = new SingleRsp();
            res = _svc.GetDocumentById(req.Id);
            return Ok(res);
        }

        [HttpGet("get-all")]
        public IActionResult getAllDocuments()
        {
            var documents = _svc.All;
            List<DocumentViewModel> documentViews = new();
            using (var context = new sharedwebContext())
            {
                foreach (var document in documents)
                {
                    documentViews.Add(new DocumentViewModel
                    {
                        DocumentId = document.DocumentId,
                        DocumentName = document.DocumentName,
                        Description = document.Description,
                        UploadDate = document.UploadDate,
                        IsCheck = document.IsCheck,
                        Views = document.Views,
                        DocumentTypeName = context.DocumentTypes.FirstOrDefault(p => p.DocumentTypeId == document.DocumentTypeId).DocumentTypeName,
                        SubjectName = context.Subjects.FirstOrDefault(s => s.SubjectId == document.SubjectId).SubjectName,
                        FileSource = document.FileSource,
                        UserName = context.Users.FirstOrDefault(u => u.UserId == document.UserId).Name,
                        ImagePreview = document.ImagePreview
                    });
                }
            }
            return Ok(documentViews);
        }

        [HttpPost("upload-document")]
        public IActionResult UploadDocument([FromForm] DocumentReq req)
        {
            Document document = new Document();
            document.DocumentName = req.DocumentName;
            document.Description = req.Description;
            document.UploadDate = DateTime.Now;
            document.IsCheck = false;
            document.Views = 0;
            document.DocumentTypeId = req.DocumentTypeId;
            document.SubjectId = req.SubjectId;
            document.ImagePreview = UploadFile(req.ImagePreview, false);
            document.FileSource = UploadFile(req.FileSource, true);
            document.UserId = req.UserId;
            var res = _svc.UploadDocument(document);

            return Ok(res);
        }

        [HttpPut("update-document")]
        public IActionResult UpdateDocument([FromForm] DocumentReq req)
        {
            Document document = new Document();
            document.DocumentId = req.DocumentId;
            document.DocumentName = req.DocumentName;
            document.Description = req.Description;
            document.DocumentTypeId = req.DocumentTypeId;
            document.SubjectId = req.SubjectId;
            document.ImagePreview = UploadFile(req.ImagePreview, false);
            document.FileSource = UploadFile(req.FileSource, true);
            var res = _svc.UpdateDocument(document);

            return Ok(res);
        }

        [HttpPost("download-document")]
        public async Task<ActionResult> DownloadDocument(int id, int userId)
        {
            // validation and get the file
            Document file = new Document();
            using (var context = new sharedwebContext())
            {
                file = context.Documents.Where(p => p.DocumentId == id).First();
            }
            string wwwRootPath = _hostEnvironment.WebRootPath;
            var filePath = $"{file.FileSource}";
            string text = await System.IO.File.ReadAllTextAsync(wwwRootPath + @"\file\" + filePath);
            //var filePath = $"{id}.{GetFileExtension((int) id)}";
            if (!System.IO.File.Exists(filePath))
            {
                await System.IO.File.WriteAllTextAsync(filePath, text);
            }

            var provider = new FileExtensionContentTypeProvider();
            if (!provider.TryGetContentType(filePath, out var contentType))
            {
                contentType = "application/octet-stream";
            }
            Download download = new Download();
            download.DocumentId = id;
            download.UserId = userId;
            _svc.DownloadDocument(download);

            var bytes = await System.IO.File.ReadAllBytesAsync(filePath);
            return File(bytes, contentType, Path.GetFileName(filePath));
        }

        [HttpDelete("delete-document")]
        public IActionResult DeleteDocument(int id)
        {
            var res = _svc.DeleteDocument(id);

            return Ok(res);
        }

        [HttpPost("check-document")]
        public IActionResult CheckDocument(int id)
        {
            var res = _svc.CheckDocument(id);

            return Ok(res);
        }

        [HttpPost("get-by-subject")]
        public IActionResult getDocumentBySubject([FromBody] SimpleReq req)
        {
            var res = new SingleRsp();
            res = _svc.ReadBySubject(req.Id);
            return Ok(res);
        }

        [HttpPost("get-document-interaction")]
        public IActionResult getDocumentInteraction([FromBody] SimpleReq req)
        {
            var res = new SingleRsp();
            var interaction = _svc.GetDocumentInteraction(req.Id);
            res.Data = interaction;
            return Ok(res);
        }

        [HttpPost("search-document")]
        public IActionResult SearchDocument([FromBody] SearchDocumentReq req)
        {
            var res = new SingleRsp();
            var pro = _svc.SearchDocument(req.Keyword, req.Page, req.Size);
            res.Data = pro;
            return Ok(res);
        }

        private string UploadFile(IFormFile file, bool type)
        {
            string fileName = null;
            string filePath;
            if (file != null)
            {
                string wwwRootPath = _hostEnvironment.WebRootPath;
                fileName = Path.GetFileNameWithoutExtension(file.FileName);
                string extension = Path.GetExtension(file.FileName);
                fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                if (type == true)
                {
                    filePath = Path.Combine(wwwRootPath + @"\file\", fileName);
                }
                else
                {
                    filePath = Path.Combine(wwwRootPath + @"\preview\", fileName);
                }
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
            }

            if(type == true)
                return "file/" + fileName;
            else
                return "preview/" + fileName;
        }

        private readonly DocumentSvc _svc;
        private readonly IWebHostEnvironment _hostEnvironment;
    }
}
