using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Shared_document_web.Common.DAL;

namespace Shared_document_web.DAL
{
    using Models;
    using Common.Rsp;
    using Shared_document_web.DAL.ViewModels;

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

        public List<LikeViewModel> GetLikesByDocument(int id)
        {
            List<LikeViewModel> likeViews = new();
            var context = new sharedwebContext();
            var likes = context.Likes.Where(p => p.DocumentId == id).ToList();
            foreach (var like in likes)
            {
                likeViews.Add(new LikeViewModel
                {
                    UserName = context.Users.Where(u => u.UserId == like.UserId).FirstOrDefault().Name,
                    LikeDate = like.LikeDate,
                    LikeId = like.LikeId,
                    DocumentName = context.Documents.Where(d => d.DocumentId == like.DocumentId).FirstOrDefault().DocumentName
                });
            }
            return likeViews;
        }
        #endregion
    }
}
