using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared_document_web.DAL.ViewModels
{
    public class DocumentViewModel
    {
        public int DocumentId { get; set; }
        public string DocumentName { get; set; }
        public string Description { get; set; }
        public DateTime UploadDate { get; set; }
        public bool IsCheck { get; set; }
        public int Views { get; set; }
        public string DocumentTypeName { get; set; }
        public string SubjectName { get; set; }
        public string FileSource { get; set; }
        public string UserName { get; set; }
        public string ImagePreview { get; set; }
    }
}
