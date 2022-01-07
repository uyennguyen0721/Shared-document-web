using System;
using System.Linq;
using Shared_document_web.Common.DAL;

namespace Shared_document_web.DAL
{
    using Models;
    using Common.Rsp;
    public class SubjectRep : GenericRep<sharedwebContext, Subject>
    {
        #region -- Overrides --
        public override Subject Read(int id)
        {
            var res = All.FirstOrDefault(p => p.SubjectId == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = base.All.First(i => i.SubjectId == id);
            m = base.Delete(m);
            return m.SubjectId;
        }
        #endregion

        #region -- Methods --
        public SingleRsp CreateSubject(Subject subject)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Subjects.Add(subject);
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

        public SingleRsp UpdateSubject(Subject subject)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Subjects.Update(subject);
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

        public SingleRsp DeleteSubject(int id)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Subjects.FirstOrDefault(p => p.SubjectId == id);
                        context.Subjects.Remove(t);
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
        #endregion
    }
}
