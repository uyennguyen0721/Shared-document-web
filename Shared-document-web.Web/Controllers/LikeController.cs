using Microsoft.AspNetCore.Mvc;

namespace Shared_document_web.Web.Controllers
{
    using BLL;
    using Common.Rsp;
    using Common.Req;

    [Route("api/[controller]")]
    [ApiController]
    public class LikeController : ControllerBase
    {
        public LikeController()
        {
            _svc = new LikeSvc();
        }

        [HttpGet("get-all")]
        public IActionResult getAllLikes()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }

        [HttpPost("create-like")]
        public IActionResult CreateLike([FromBody] LikeReq req)
        {
            var res = _svc.CreateLike(req);

            return Ok(res);
        }

        [HttpDelete("delete-like")]
        public IActionResult DeleteLike(int id)
        {
            var res = _svc.DeleteLike(id);

            return Ok(res);
        }

        [HttpGet("get-likes-by-document")]
        public IActionResult GetLikesByDocument(int id)
        {
            var res = _svc.GetLikeByDocument(id);

            return Ok(res);
        }

        private readonly LikeSvc _svc;
    }
}
