using System;
using System.Linq;
using System.Data;
using Shared_document_web.Common.DAL;

namespace Shared_document_web.DAL
{
    using Common.Rsp;
    using Shared_document_web.DAL.Models;

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
                        if(IsUsernameRepeat(user.Username) == true)
                        {
                            var t = context.Users.Add(user);
                            context.SaveChanges();
                            tran.Commit();
                        }
                        else
                        {
                            throw new Exception("Username already used");
                        }
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


        public object Login(String username, String password)
        {
            var res = Context.Users
                .Where(x => x.Username == username && x.Password == password)
                .Select(u => new {
                    u.Name,
                    u.UserRoleId
                }).ToList();
            return res;
        }

        /// <summary>
        /// Kiểm trav trùng username không
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public bool IsUsernameRepeat(String username)
        {
            var res = Context.Users.Where(u => u.Username.Equals(username)).FirstOrDefault();
            return res == default;
        }
    }
}
