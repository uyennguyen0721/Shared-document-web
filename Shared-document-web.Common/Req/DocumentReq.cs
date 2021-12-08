﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Shared_document_web.Common.Req
{
    public class DocumentReq
    {
        public int DocumentId { get; set; }
        public string DocumentName { get; set; }
        public string Description { get; set; }
        public DateTime UploadDate { get; set; }
        public bool IsCheck { get; set; }
        public int Views { get; set; }
        public int? DocumentTypeId { get; set; }
        public int? SubjectId { get; set; }
        public IFormFile FileSource { get; set; }
    }
}
