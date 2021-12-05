using System;
using System.Collections.Generic;

#nullable disable

namespace Shared_document_web.DAL.Models
{
    public partial class Subject
    {
        public Subject()
        {
            Documents = new HashSet<Document>();
        }

        public int SubjectId { get; set; }
        public string SubjectName { get; set; }

        public virtual ICollection<Document> Documents { get; set; }
    }
}
