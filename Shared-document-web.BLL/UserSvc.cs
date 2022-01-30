using System;
using System.Linq;
using Shared_document_web.Common.Rsp;
using Shared_document_web.Common.BLL;

namespace Shared_document_web.BLL
{
    using DAL;
    using DAL.Models;
    public class UserSvc : GenericSvc<UserRep, User>
    {
        #region -- Override --
        public override SingleRsp Read(int id)
        {
            var res = new SingleRsp();

            var m = _rep.Read(id);
            res.Data = m;

            return res;
        }

        public SingleRsp CreateUser(User user)
        {
            var res = new SingleRsp();
            User users = new User();
            users.Name = user.Name;
            users.Username = user.Username;
            users.Password = user.Password;
            users.Email = user.Email;
            users.Birthday = user.Birthday;
            users.Gender = user.Gender;
            users.IsActive = true;
            users.Avatar = user.Avatar;
            users.JoinedDate = DateTime.Now;
            users.UserRoleId = (int)user.UserRoleId;

            res = _rep.CreateUser(users);
            return res;
        }

        public int DeleteUser(int id)
        {
            return _rep.DeleteUser(id);
        }
        #endregion

        #region -- Methods --

        public SingleRsp UpdateUser(int userId, string name, string username, string password, string avatar, string email, DateTime? birthday, string gender)
        {
            var res = new SingleRsp();
            res = _rep.UpdateUser(userId, name, username, password, avatar, email, birthday, gender);
            return res;
        }

        public object SearchUser(String keyword, int page, int size)
        {
            var pro = All.Where(x => x.Name.Contains(keyword));

            var offset = (page - 1) * size;
            var total = pro.Count();
            int totalPages = (total % size) == 0 ? (int)(total / size) : (int)((total / size) + 1);
            var data = pro.OrderBy(x => x.Name).Skip(offset).Take(size).ToList();

            var res = new
            {
                Data = data,
                TotalRecord = total,
                TotalPages = totalPages,
                Page = page,
                Size = size
            };
            return res;
        }
        public object CheckAcc_Linq(String username, String password)
        {
            return _rep.CheckAcc_Linq(username, password);
        }
        #endregion
    }
}
