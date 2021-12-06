using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared_document_web.Common.Req
{
    class DocumentInteractionReq
    {
        public int CountView { set; get; }
        public int CountLike { set; get; }
        public int CountComment { set; get; }
    }
}
