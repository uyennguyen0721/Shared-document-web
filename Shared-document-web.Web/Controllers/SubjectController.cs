using Microsoft.AspNetCore.Mvc;

namespace Shared_document_web.Web.Controllers
{
    using BLL;
    using Common.Rsp;
    using Common.Req;

    [Route("api/[controller]")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        public SubjectController()
        {
            _svc = new SubjectSvc();
        }

        [HttpPost("get-by-id")]
        public IActionResult getSubjectById([FromBody] SimpleReq req)
        {
            var res = new SingleRsp();
            res = _svc.Read(req.Id);
            return Ok(res);
        }

        [HttpGet("get-all")]
        public IActionResult getAllSubjects()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }

        [HttpPost("create-subject")]
        public IActionResult CreateSubject([FromBody] SubjectReq req)
        {
            var res = _svc.CreateSubject(req);

            return Ok(res);
        }

        [HttpPut("update-subject")]
        public IActionResult UpdateSubject([FromBody] SubjectReq req)
        {
            var res = _svc.UpdateSubject(req);

            return Ok(res);
        }

        [HttpDelete("delete-subject")]
        public IActionResult DeleteSubject(int id)
        {
            var res = _svc.DeleteSubject(id);

            return Ok(res);
        }

        private readonly SubjectSvc _svc;
    }
}
