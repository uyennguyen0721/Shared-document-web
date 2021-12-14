using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared_document_web.Common.Req
{
    public class UserReq
    {
        public int Page { get; set; }
        public int Size { get; set; }
        public string Keyword { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public IFormFile Avatar { get; set; }
        public string Email { get; set; }
        public DateTime? Birthday { get; set; }
        public string Gender { get; set; }
        public bool IsActive { get; set; }
        public DateTime JoinedDate { get; set; }
        public int Userrole { get; set; }
        public int? UserRoleId { get; set; }
    }
}
