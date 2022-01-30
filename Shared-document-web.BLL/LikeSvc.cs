using System;
using Shared_document_web.Common.Rsp;
using Shared_document_web.Common.BLL;

namespace Shared_document_web.BLL
{
    using DAL;
    using DAL.Models;
    using Shared_document_web.Common.Req;
    public class LikeSvc : GenericSvc<LikeRep, Like>
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

        public override SingleRsp Update(Like m)
        {
            var res = new SingleRsp();

            var m1 = m.LikeId > 0 ? _rep.Read(m.LikeId) : null;
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
        public SingleRsp CreateLike(LikeReq like)
        {
            var res = new SingleRsp();
            Like likes = new Like();
            likes.LikeDate = DateTime.Now;
            likes.DocumentId = like.DocumentId;
            likes.UserId = like.UserId;

            res = _rep.CreateLike(likes);
            return res;
        }

        public SingleRsp DeleteLike(int id)
        {
            var res = new SingleRsp();
            res = _rep.DeleteLike(id);
            return res;
        }

        public SingleRsp GetLikeByDocument(int id)
        {
            var res = new SingleRsp();
            var likes = _rep.GetLikesByDocument(id);
            res.Data = likes;
            return res;
        }
        #endregion
    }
}