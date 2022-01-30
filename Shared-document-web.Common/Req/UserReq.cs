using Microsoft.AspNetCore.Http;
using System;

namespace Shared_document_web.Common.Req
{
    public class UserReq
    {
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
        public int? UserRoleId { get; set; }
    }
}
