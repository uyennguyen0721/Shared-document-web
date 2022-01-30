using System;
using Shared_document_web.Common.Rsp;
using Shared_document_web.Common.BLL;

namespace Shared_document_web.BLL
{
    using DAL;
    using DAL.Models;

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

        public SingleRsp GetDocumentById(int id)
        {
            var res = new SingleRsp();
            var m = _rep.GetDocumentById(id);
            res.Data = m;
            return res;
        }

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
            documents.UserId = document.UserId;
            documents.ImagePreview = document.ImagePreview;
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

        public SingleRsp DownloadDocument(Download download)
        {
            var res = new SingleRsp();
            Download downloads = new Download();
            downloads.DownloadDate = DateTime.Now;
            downloads.DocumentId = download.DocumentId;
            downloads.UserId = download.UserId;

            res = _rep.DownloadDocument(downloads);
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