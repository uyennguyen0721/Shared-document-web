using System;
using System.Collections.Generic;

#nullable disable

namespace Shared_document_web.DAL.Models
{
    public partial class User
    {
        public User()
        {
            Comments = new HashSet<Comment>();
            Downloads = new HashSet<Download>();
            Histories = new HashSet<History>();
            Likes = new HashSet<Like>();
        }

        public int UserId { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Avatar { get; set; }
        public string Email { get; set; }
        public DateTime? Birthday { get; set; }
        public string Gender { get; set; }
        public bool IsActive { get; set; }
        public DateTime JoinedDate { get; set; }
        public int Userrole { get; set; }
        public int? UserRoleId { get; set; }

        public virtual UserRole UserRole { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Download> Downloads { get; set; }
        public virtual ICollection<History> Histories { get; set; }
        public virtual ICollection<Like> Likes { get; set; }
    }
}
