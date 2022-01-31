using System;

namespace Shared_document_web.Common.Req
{
    public class CommentReq
    {
        public int CommentId { get; set; }
        public DateTime CommentDate { get; set; }
        public int? UserId { get; set; }
        public int? DocumentId { get; set; }
        public string Contents { get; set; }
    }
}
