using System;
using System.Collections.Generic;

#nullable disable

namespace Shared_document_web.DAL.Models
{
    public partial class Download
    {
        public int DownloadId { get; set; }
        public DateTime DownloadDate { get; set; }
        public int? UserId { get; set; }
        public int? DocumentId { get; set; }

        public virtual Document Document { get; set; }
        public virtual User User { get; set; }
    }
}
