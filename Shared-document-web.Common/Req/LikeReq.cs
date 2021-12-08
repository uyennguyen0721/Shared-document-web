using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared_document_web.Common.Req
{
    public class LikeReq
    {
        public int LikeId { get; set; }
        public DateTime LikeDate { get; set; }
        public int? UserId { get; set; }
        public int? DocumentId { get; set; }
    }
}
