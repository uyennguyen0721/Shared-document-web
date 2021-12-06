using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared_document_web.Common.DAL;

namespace Shared_document_web.DAL
{
    using Models;
    using Common.Rsp;
    public class DocumentRep : GenericRep<sharedwebContext, Document>
    {
        #region -- Overrides --
        public override Document Read(int id)
        {
            var res = All.FirstOrDefault(p => p.DocumentId == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = base.All.First(i => i.DocumentId == id);
            m = base.Delete(m);
            return m.DocumentId;
        }
        #endregion

        #region -- Methods --
        public SingleRsp CreateDocument(Document document)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Documents.Add(document);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res.SetError(ex.StackTrace);
                    }
                }
            }
            return res;
        }

        public SingleRsp UpdateDocument(Document document)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Documents.Update(document);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res.SetError(ex.StackTrace);
                    }
                }
            }
            return res;
        }

        public SingleRsp DeleteDocument(int id)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Documents.FirstOrDefault(p => p.DocumentId == id);
                        context.Documents.Remove(t);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res.SetError(ex.StackTrace);
                    }
                }
            }
            return res;
        }

        public SingleRsp CheckDocument(int id)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Documents.FirstOrDefault(p => p.DocumentId == id);
                        t.IsCheck = true;
                        context.Documents.Update(t);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res.SetError(ex.StackTrace);
                    }
                }
            }
            return res;
        }

        public Document ReadBySubject(int id)
        {
            var res = All.FirstOrDefault(p => p.SubjectId == id);
            return res;
        }
        #endregion
    }
}
