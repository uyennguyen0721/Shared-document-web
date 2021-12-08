using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared_document_web.Common.Req
{
    public class HistoryReq
    {
        public int HistoryId { get; set; }
        public DateTime Time { get; set; }
        public string Content { get; set; }
        public int? UserId { get; set; }
    }
}
