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
    public class HistoryController : ControllerBase
    {
        public HistoryController()
        {
            _svc = new HistorySvc();
        }

        [HttpGet("get-all")]
        public IActionResult getAllComments()
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }

        private readonly HistorySvc _svc;
    }
}
