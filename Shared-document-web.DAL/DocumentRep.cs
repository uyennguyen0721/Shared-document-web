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

            // Cập nhật views
            res.Views++;
            var res1 = new SingleRsp();
            using (var context = new sharedwebContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Documents.Update(res);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res1.SetError(ex.StackTrace);
                    }
                }
            }

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

        public List<Document> ReadBySubject(int id)
        {
            var context = new sharedwebContext();
            var res = context.Documents.Where(p => p.SubjectId == id).ToList();
            return res;
        }

        public object GetDocumentInteraction(int id)
        {
            int countView = 0, countLike = 0, countComment = 0;
            using (var context = new sharedwebContext())
            {
                countView += context.Documents.First(p => p.DocumentId == id).Views;
                countLike += context.Likes.Where(p => p.DocumentId == id).Count();
                countComment += context.Comments.Where(p => p.DocumentId == id).Count();
            }
            var res = new
            {
                CountView = countView,
                CountLike = countLike,
                CountComment = countComment
            };

            return res;
        }

        public object SearchDocument(string keyword, int page, int size)
        {
            var doc = Context.Documents
                .Join(Context.DocumentTypes, a => a.DocumentTypeId, b => b.DocumentTypeId, (a, b) => new
                {
                    a.DocumentId,
                    a.DocumentName,
                    a.Description,
                    a.FileSource,
                    a.UploadDate,
                    a.Views,
                    b.DocumentTypeName,
                    a.SubjectId,
                })
                .Join(Context.Subjects, a => a.SubjectId, b => b.SubjectId, (a, b) => new
                {
                    a.DocumentId,
                    a.DocumentName,
                    a.Description,
                    a.FileSource,
                    a.UploadDate,
                    b.SubjectName
                });
            if (!string.IsNullOrEmpty(keyword))
            {
                doc = doc.Where(x => x.DocumentName.ToLower().Contains(keyword.ToLower()));
            }

            var offset = (page - 1) * size;
            var total = doc.Count();
            int totalPages = (total % size) == 0 ? (int)(total / size) : (int)((total / size) + 1);
            var data = doc.OrderBy(x => x.DocumentName).Skip(offset).Take(size).ToList();

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
        #endregion
    }
}
