using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared_document_web.DAL.ViewModels
{
    public class CommentViewModel
    {
        public int CommentId { get; set; }
        public DateTime CommentDate { get; set; }
        public string UserName { get; set; }
        public string DocumentName { get; set; }
        public string Contents { get; set; }
    }
}
