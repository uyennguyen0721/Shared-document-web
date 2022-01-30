using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Shared_document_web.Common.DAL;

namespace Shared_document_web.DAL
{
    using Models;
    using Common.Rsp;

    public class LikeRep : GenericRep<sharedwebContext, Like>
    {
        #region -- Overrides --
        public override Like Read(int id)
        {
            var res = All.FirstOrDefault(p => p.LikeId == id);
            return res;
        }
        public int Remove(int id)
        {
            var m = base.All.First(i => i.LikeId == id);
            m = base.Delete(m);
            return m.LikeId;
        }
        #endregion

        #region -- Methods --
        public SingleRsp CreateLike(Like like)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var userName = context.Users.Where(u => u.UserId == like.UserId).First().Name;
                        var docName = context.Documents.Where(d => d.DocumentId == like.DocumentId).First().DocumentName;
                        var t = context.Likes.Add(like);

                        context.SaveChanges();
                        Task.Delay(500).Wait();
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

        public SingleRsp DeleteLike(int id)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Likes.FirstOrDefault(p => p.LikeId == id);
                        var userName = context.Users.Where(u => u.UserId == t.UserId).First().Name;
                        var docName = context.Documents.Where(d => d.DocumentId == t.DocumentId).First().DocumentName;

                        context.Likes.Remove(t);
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

        public List<Like> GetLikesByDocument(int id)
        {
            var context = new sharedwebContext();
            var like = context.Likes.Where(p => p.DocumentId == id).ToList();
            return like;
        }
        #endregion
    }
}