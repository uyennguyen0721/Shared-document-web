using Microsoft.AspNetCore.Mvc;

namespace Shared_document_web.Web.Controllers
{
    using BLL;
    using Common.Rsp;
    using Common.Req;

    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        public CommentController()
        {
            _svc = new CommentSvc();
        }

        [HttpGet("get-all")]
        public IActionResult getAllComments()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }

        [HttpPost("add-comment")]
        public IActionResult AddComment([FromBody] CommentReq req)
        {
            var res = _svc.AddComment(req);

            return Ok(res);
        }

        [HttpPut("update-comment")]
        public IActionResult UpdateComment([FromBody] CommentReq req)
        {
            var res = _svc.UpdateComment(req);

            return Ok(res);
        }

        [HttpDelete("delete-comment")]
        public IActionResult DeleteComment(int id)
        {
            var res = _svc.DeleteComment(id);

            return Ok(res);
        }

        [HttpPost("get-comments-by-document")]
        public IActionResult GetCommentsByDocument(int id)
        {
            var res = _svc.GetCommentsByDocument(id);
            return Ok(res);
        }

        private readonly CommentSvc _svc;
    }
}
