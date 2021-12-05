using System;
using System.Collections.Generic;

#nullable disable

namespace Shared_document_web.DAL.Models
{
    public partial class DocumentType
    {
        public DocumentType()
        {
            Documents = new HashSet<Document>();
        }

        public int DocumentTypeId { get; set; }
        public string DocumentTypeName { get; set; }

        public virtual ICollection<Document> Documents { get; set; }
    }
}
