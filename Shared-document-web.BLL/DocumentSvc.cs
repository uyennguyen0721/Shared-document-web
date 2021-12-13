using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Shared_document_web.Common.Rsp;
using Shared_document_web.Common.BLL;

namespace Shared_document_web.BLL
{
    using DAL;
    using DAL.Models;
    using Shared_document_web.Common.Req;
    using System.IO;

    public class DocumentSvc : GenericSvc<DocumentRep, Document>
    {
        #region -- Overrides --
        public override SingleRsp Read(int id)
        {
            var res = new SingleRsp();
            var m = _rep.Read(id);
            res.Data = m;
            return res;
        }

        public override int Remove(int id)
        {
            var res = new SingleRsp();

            var m = _rep.Remove(id);
            res.Data = m;

            return 0;
        }

        public override SingleRsp Update(Document m)
        {
            var res = new SingleRsp();

            var m1 = m.DocumentId > 0 ? _rep.Read(m.DocumentId) : _rep.Read(m.DocumentName);
            if (m1 == null)
            {
                res.SetError("EZ103", "No data.");
            }
            else
            {
                res = base.Update(m);
                res.Data = m;
            }

            return res;
        }
        #endregion

        #region -- Methods --
        public SingleRsp UploadDocument(Document document)
        {
            var res = new SingleRsp();
            Document documents = new Document();
            documents.DocumentName = document.DocumentName;
            documents.Description = document.Description;
            documents.UploadDate = DateTime.Now;
            documents.IsCheck = false;
            documents.Views = 0;
            documents.DocumentTypeId = document.DocumentTypeId;
            documents.SubjectId = document.SubjectId;
            documents.FileSource = document.FileSource;

            res = _rep.UploadDocument(documents);
            return res;
        }

        public SingleRsp UpdateDocument(Document document)
        {
            var res = new SingleRsp();
            Document documents = new Document();
            documents.DocumentId = document.DocumentId;
            documents.DocumentName = documents.DocumentName;
            documents.Description = documents.Description;
            documents.UploadDate = DateTime.Now;
            documents.DocumentTypeId = documents.DocumentTypeId;
            documents.SubjectId = documents.SubjectId;
            documents.FileSource = documents.FileSource;

            res = _rep.UpdateDocument(documents);
            return res;
        }

        public SingleRsp DeleteDocument(int id)
        {
            var res = new SingleRsp();
            res = _rep.DeleteDocument(id);
            return res;
        }

        public SingleRsp CheckDocument(int id)
        {
            var res = new SingleRsp();
            res = _rep.CheckDocument(id);
            return res;
        }

        public SingleRsp ReadBySubject(int id)
        {
            var res = new SingleRsp();
            var m = _rep.ReadBySubject(id);
            res.Data = m;
            return res;
        }

        public object GetDocumentInteraction(int id)
        {
            return _rep.GetDocumentInteraction(id);
        }

        public object SearchDocument(String keyword, int page, int size)
        {
            return _rep.SearchDocument(keyword, page, size);
        }
        #endregion
    }
}
