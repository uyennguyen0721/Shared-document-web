using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Shared_document_web.Web.Controllers
{
    using BLL;
    using Common.Req;
    using Common.Rsp;
    using Microsoft.AspNetCore.Hosting;
    using Shared_document_web.DAL.Models;
    using System.IO;
    using System.Security.Cryptography;
    using System.Text;

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public UserController(IWebHostEnvironment hostEnvironment)
        {
            _svc = new UserSvc();
            _hostEnvironment = hostEnvironment;
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

        // Đăng ký
        [HttpPost("create-user")]
        public IActionResult CreateUser([FromForm] UserReq req)
        {
            User user = new User();
            user.Name = req.Name;
            user.Username = req.Username;
            user.Password = Encrypt(req.Password);
            user.Email = req.Email;
            user.Birthday = req.Birthday;
            user.Gender = req.Gender;
            user.Avatar = UploadAvatar(req.Avatar);
            user.IsActive = true;
            user.JoinedDate = DateTime.Now;
            user.UserRoleId = (int)req.UserRoleId;
            var res = _svc.CreateUser(user);
            return Ok(res);
        }

        [HttpPut("update-user")]
        public IActionResult UpdateUser([FromForm] UserReq req)
        {
            User user = new User();
            user.UserId = req.UserId;
            user.Name = req.Name;
            user.Username = req.Username;
            user.Password = Encrypt(req.Password);
            user.Avatar = UploadAvatar(req.Avatar);
            user.Email = req.Email;
            user.Birthday = req.Birthday;
            user.Gender = req.Gender;
            var res = _svc.UpdateUser(user.UserId, user.Name, user.Username, user.Password, user.Avatar, user.Email, user.Birthday, user.Gender);

            return Ok(res);
        }


        [HttpDelete("delete-user")]
        public IActionResult DeleteUser([FromBody] UserReq req)
        {
            var res = _svc.DeleteUser(req.UserId);

            return Ok(res);
        }

        // Đăng nhập
        [HttpPost("login")]
        public IActionResult Login([FromForm] UserLoginReq req)
        {
            var res = new SingleRsp();
            res.Data = _svc.Login(req.Username, Encrypt(req.Password));
            return Ok(res);
        }

        private string UploadAvatar(IFormFile file)
        {
            string fileName = null;
            if (file != null)
            {
                string wwwRootPath = _hostEnvironment.WebRootPath;
                fileName = Path.GetFileNameWithoutExtension(file.FileName);
                string extension = Path.GetExtension(file.FileName);
                fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
                string filePath = Path.Combine(wwwRootPath + @"\avatar\", fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }

                return "avatar/" + fileName;
            }
            else
            {
                return fileName;
            }
        }

        // mã hóa
        public static string Encrypt(string toEncrypt)
        {
            bool useHashing = true;
            byte[] keyArray;
            byte[] toEncryptArray = UTF8Encoding.UTF8.GetBytes(toEncrypt);

            if (useHashing)
            {
                MD5CryptoServiceProvider hashmd5 = new MD5CryptoServiceProvider();
                keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(_key));
            }
            else
                keyArray = UTF8Encoding.UTF8.GetBytes(_key);

            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyArray;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;

            ICryptoTransform cTransform = tdes.CreateEncryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);

            return Convert.ToBase64String(resultArray, 0, resultArray.Length);
        }

        private readonly UserSvc _svc;
        private readonly IWebHostEnvironment _hostEnvironment;
        private const string _key = "laptrinhcosodulieu";
    }
}
