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

    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        public DocumentController()
        {
            _svc = new DocumentSvc();
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

        //[HttpPost("upload-document")]
        //public IActionResult UploadDocument([FromBody] DocumentReq req)
        //{
        //    var res = _svc.UploadDocument(req);

        //    return Ok(res);
        //}

        [HttpPut("update-document")]
        public IActionResult UpdateDocument([FromBody] DocumentReq req)
        {
            var res = _svc.UpdateDocument(req);

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

        private readonly DocumentSvc _svc;
    }
}
