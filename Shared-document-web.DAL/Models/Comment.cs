using System;
using System.Collections.Generic;

#nullable disable

namespace Shared_document_web.DAL.Models
{
    public partial class Comment
    {
        public int CommentId { get; set; }
        public DateTime CommentDate { get; set; }
        public int? UserId { get; set; }
        public int? DocumentId { get; set; }
        public string Contents { get; set; }

        public virtual Document Document { get; set; }
        public virtual User User { get; set; }
    }
}
