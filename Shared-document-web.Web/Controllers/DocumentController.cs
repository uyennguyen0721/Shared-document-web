using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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
            res = _svc.Read(req.Id);
            return Ok(res);
        }

        [HttpGet("get-all")]
        public IActionResult getAllDocuments()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }

        [HttpPost("upload-document")]
        public IActionResult UploadDocument([FromBody] DocumentReq req)
        {
            Document document = new Document();
            document.DocumentName = req.DocumentName;
            document.Description = req.Description;
            document.UploadDate = DateTime.Now;
            document.IsCheck = false;
            document.Views = 0;
            document.DocumentTypeId = req.DocumentTypeId;
            document.SubjectId = req.SubjectId;
            document.FileSource = UploadFile(req.FileSource);
            var res = _svc.UploadDocument(document);

            return Ok(res);
        }

        [HttpPut("update-document")]
        public IActionResult UpdateDocument([FromBody] DocumentReq req)
        {
            Document document = new Document();
            document.DocumentName = req.DocumentName;
            document.Description = req.Description;
            document.DocumentTypeId = req.DocumentTypeId;
            document.SubjectId = req.SubjectId;
            document.FileSource = UploadFile(req.FileSource);
            var res = _svc.UpdateDocument(document);

            return Ok(res);
        }

        [HttpGet("download-document")]
        public async Task<ActionResult> DownloadDocument(int id)
        {
            // validation and get the file
            Document file = new Document();
            using (var context = new sharedwebContext())
            {
                file = context.Documents.Where(p => p.DocumentId == id).First();
            }
            var filePath = $"{file.DocumentName}.{GetFileExtension((int)file.DocumentTypeId)}";
            //var filePath = $"{id}.{GetFileExtension((int) id)}";
            if (!System.IO.File.Exists(filePath))
            {
                await System.IO.File.WriteAllTextAsync(filePath, "Hello World!");
            }

            var provider = new FileExtensionContentTypeProvider();
            if (!provider.TryGetContentType(filePath, out var contentType))
            {
                contentType = "application/octet-stream";
            }

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

        private string UploadFile(IFormFile file)
        {
            string fileName = null;
            if (file != null)
            {
                string wwwRootPath = _hostEnvironment.WebRootPath;
                fileName = Path.GetFileNameWithoutExtension(file.FileName);
                string extension = Path.GetExtension(file.FileName);
                fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                string filePath = Path.Combine(wwwRootPath + @"/file/", fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
            }
            return fileName;
        }

        private string GetFileExtension(int typeDoc)
        {
            string fileExtension = "";
            switch (typeDoc)
            {
                case 1:
                    fileExtension = "docx";
                    break;
                case 2:
                    fileExtension = "pdf";
                    break;
                case 3:
                    fileExtension = "pptx";
                    break;
                case 4:
                    fileExtension = "xlsx";
                    break;
                case 5:
                    fileExtension = "pps";
                    break;
                default:
                    fileExtension = "txt";
                    break;
            }
            return fileExtension;

        }

        private readonly DocumentSvc _svc;
        private readonly IWebHostEnvironment _hostEnvironment;
    }
}
