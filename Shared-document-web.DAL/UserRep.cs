using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Text;
using System.Threading.Tasks;
using Shared_document_web.Common.DAL;

namespace Shared_document_web.DAL
{
    using Models;
    using Common.Rsp;
    public class UserRep : GenericRep<sharedwebContext, User>
    {
        public override User Read(int id)
        {
            var res = All.FirstOrDefault(u => u.UserId == id);
            return res;
        }
        public SingleRsp CreateUser(User user)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Users.Add(user);
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

        public int DeleteUser(int id)
        {
            var res = 0;
            var context = new sharedwebContext();
            var user = base.All.FirstOrDefault(u => u.UserId == id);
            if (user != null)
            {
                context.Users.Remove(user);
                res = context.SaveChanges();
            }
            return res;
        }

        public SingleRsp UpdateUser(int userId, string name, string username, string password, string avatar, string email, DateTime? birthday, string gender)
        {
            var res = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        User user = Context.Users.Where(x => x.UserId == userId).ToList().FirstOrDefault();
                        user.Name = name;
                        user.Username = username;
                        user.Password = password;
                        user.Avatar = avatar;
                        user.Email = email;
                        user.Birthday = birthday;
                        user.Gender = gender;
                        var t = context.Users.Update(user);
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


        public object CheckAcc_Linq(String username)
        {
            var res = Context.Users
                .Where(x => x.Username == username)
                .Select(u => new {
                    u.UserId,
                    u.UserRoleId,
                    u.Password
                }).ToList();
            return res;
        }
    }
}
