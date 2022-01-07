using System;

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
