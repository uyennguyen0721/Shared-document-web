using System;
using Shared_document_web.Common.Rsp;
using Shared_document_web.Common.BLL;

namespace Shared_document_web.BLL
{
    using DAL;
    using DAL.Models;
    using Shared_document_web.Common.Req;
    public class CommentSvc : GenericSvc<CommentRep, Comment>
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

        public override SingleRsp Update(Comment m)
        {
            var res = new SingleRsp();

            var m1 = m.CommentId > 0 ? _rep.Read(m.CommentId) : _rep.Read(m.Contents);
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
        public SingleRsp AddComment(CommentReq comment)
        {
            var res = new SingleRsp();
            Comment comments = new Comment();
            comments.Contents = comment.Contents;
            comments.CommentDate = DateTime.Now;
            comments.DocumentId = comment.DocumentId;
            comments.UserId = comment.UserId;

            res = _rep.AddComment(comments);
            return res;
        }

        public SingleRsp UpdateComment(CommentReq comment)
        {
            var res = new SingleRsp();
            Comment comments = new Comment();
            comments.CommentId = comment.CommentId;
            comments.Contents = comment.Contents;
            comments.CommentDate = DateTime.Now;
            comments.DocumentId = comment.DocumentId;
            comments.UserId = comment.UserId;

            res = _rep.UpdateComment(comments);
            return res;
        }

        public SingleRsp DeleteComment(int id)
        {
            var res = new SingleRsp();
            res = _rep.DeleteComment(id);
            return res;
        }

        public SingleRsp GetCommentsByDocument(int id)
        {
            var res = new SingleRsp();
            var comments = _rep.GetCommentsByDocument(id);
            res.Data = comments;
            return res;
        }
        #endregion
    }
}