using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared_document_web.DAL.ViewModels
{
    public class LikeViewModel
    {
        public int LikeId { get; set; }
        public DateTime LikeDate { get; set; }
        public string UserName { get; set; }
        public string DocumentName { get; set; }
    }
}
