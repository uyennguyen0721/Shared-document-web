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
<<<<<<< HEAD
    using Microsoft.AspNetCore.StaticFiles;
=======
>>>>>>> uyenn

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
<<<<<<< HEAD

        [HttpGet("download-document")]
        public async Task<ActionResult> DownloadFile([FromBody] DocumentReq req)
        {
            // validation and get the file

            var filePath = $"{req.DocumentName}.txt";
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
=======
>>>>>>> uyenn

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

        private readonly DocumentSvc _svc;
        private readonly IWebHostEnvironment _hostEnvironment;
    }
}
