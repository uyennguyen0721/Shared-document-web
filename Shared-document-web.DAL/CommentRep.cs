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
    public class CommentRep : GenericRep<sharedwebContext, Comment>
    {
        #region -- Overrides --
        public override Comment Read(int id)
        {
            var res = All.FirstOrDefault(p => p.CommentId == id);
            return res;
        }
        public int Remove(int id)
        {
            var m = base.All.First(i => i.CommentId == id);
            m = base.Delete(m);
            return m.CommentId;
        }
        #endregion

        #region -- Methods --
        public SingleRsp AddComment(Comment comment)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var userName = context.Users.Where(u => u.UserId == comment.UserId).First().Name;
                        var docName = context.Documents.Where(d => d.DocumentId == comment.DocumentId).First().DocumentName;
                        var t = context.Comments.Add(comment);

                        // Thêm vào lịch sử hoạt động
                        var history = new History();
                        history.Time = DateTime.Now;
                        history.UserId = comment.UserId;
                        history.Content = userName + " đã bình luận về tài liệu " + docName;
                        context.Histories.Add(history);

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

        public SingleRsp UpdateComment(Comment comment)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var userName = context.Users.Where(u => u.UserId == comment.UserId).First().Name;
                        var docName = context.Documents.Where(d => d.DocumentId == comment.DocumentId).First().DocumentName;
                        var t = context.Comments.Update(comment);

                        // Thêm vào lịch sử hoạt động
                        var history = new History();
                        history.Time = DateTime.Now;
                        history.UserId = comment.UserId;
                        history.Content = userName + " đã cập nhật lại bình luận về tài liệu " + docName;
                        context.Histories.Add(history);

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

        public SingleRsp DeleteComment(int id)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Comments.FirstOrDefault(p => p.CommentId == id);
                        var userName = context.Users.Where(u => u.UserId == t.UserId).First().Name;
                        var docName = context.Documents.Where(d => d.DocumentId == t.DocumentId).First().DocumentName;

                        // Thêm vào lịch sử hoạt động
                        var history = new History();
                        history.Time = DateTime.Now;
                        history.UserId = t.UserId;
                        history.Content = userName + " đã xóa bình luận về tài liệu " + docName;
                        context.Histories.Add(history);

                        context.Comments.Remove(t);
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

        public List<Comment> GetCommentsByDocument(int id)
        {
            var context = new sharedwebContext();
            var comments = context.Comments.Where(p => p.DocumentId == id).ToList();
            return comments;
        }
        #endregion
    }
}
