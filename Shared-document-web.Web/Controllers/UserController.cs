using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shared_document_web.Web.Controllers
{
    using BLL;
    using Common.Req;
    using Common.Rsp;

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public UserController()
        {
            _svc = new UserSvc();
        }

        [HttpPost("get-by-id")]
        public IActionResult getUsersId([FromBody] SimpleReq rep)
        {
            var res = new SingleRsp();
            res = _svc.Read(rep.Id);
            return Ok(res);
        }


        [HttpPost("get-by-all")]
        public IActionResult getAllUsers([FromBody] SimpleReq rep)
        {
            var res = new SingleRsp();
            res.Data = _svc.All;
            return Ok(res);
        }

        [HttpPost("search-user")]
        public IActionResult SearchUser([FromBody] UserReq req)
        {
            var res = new SingleRsp();
            var pro = _svc.SearchUser(req.Keyword, req.Page, req.Size);
            res.Data = pro;
            return Ok(res);
        }

        // Đăng ký
        [HttpPost("create-user")]
        public IActionResult CreateUser([FromBody] UserReq req)
        {
            var res = _svc.CreateUser(req);

            return Ok(res);
        }

        [HttpPut("update-user")]
        public IActionResult UpdateUser([FromBody] UserReq req)
        {
            var res = _svc.UpdateUser(req.UserId, req.Name, req.Username, req.Password, req.Avatar, req.Email, req.Birthday, req.Gender, (int) req.UserRoleId);

            return Ok(res);
        }

        [HttpDelete("delete-user")]
        public IActionResult DeleteUser([FromBody] UserReq req)
        {
            var res = _svc.DeleteUser(req.UserId);

            return Ok(res);
        }

        // Đăng nhập
        [HttpPost("check-tai-khoan")]
        public IActionResult CheckAcc_Linq([FromBody] UserReq req)
        {
            var res = new SingleRsp();
            res.Data = _svc.CheckAcc_Linq(req.Username);
            return Ok(res);
        }

        private readonly UserSvc _svc;
    }
}
