using System;
using System.Collections.Generic;

#nullable disable

namespace Shared_document_web.DAL.Models
{
    public partial class History
    {
        public int HistoryId { get; set; }
        public DateTime Time { get; set; }
        public string Content { get; set; }
        public int? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
