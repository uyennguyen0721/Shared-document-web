using System;
using System.Collections.Generic;

#nullable disable

namespace Shared_document_web.DAL.Models
{
    public partial class Document
    {
        public Document()
        {
            Comments = new HashSet<Comment>();
            Downloads = new HashSet<Download>();
            Likes = new HashSet<Like>();
        }

        public int DocumentId { get; set; }
        public string DocumentName { get; set; }
        public string Description { get; set; }
        public DateTime UploadDate { get; set; }
        public bool IsCheck { get; set; }
        public int Views { get; set; }
        public int? DocumentTypeId { get; set; }
        public int? SubjectId { get; set; }
        public string FileSource { get; set; }

        public virtual DocumentType DocumentType { get; set; }
        public virtual Subject Subject { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Download> Downloads { get; set; }
        public virtual ICollection<Like> Likes { get; set; }
    }
}
