using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared_document_web.BLL;
using Shared_document_web.Common.Rsp;
using Shared_document_web.Common.BLL;

namespace Shared_document_web.BLL
{
    using DAL;
    using DAL.Models;
    using Shared_document_web.Common.Req;

    public class SubjectSvc : GenericSvc<SubjectRep, Subject>
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

        public override SingleRsp Update(Subject m)
        {
            var res = new SingleRsp();

            var m1 = m.SubjectId > 0 ? _rep.Read(m.SubjectId) : _rep.Read(m.SubjectName);
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
        public SingleRsp CreateSubject(SubjectReq subject)
        {
            var res = new SingleRsp();
            Subject subjects = new Subject();
            subjects.SubjectName = subject.SubjectName;

            res = _rep.CreateSubject(subjects);
            return res;
        }

        public SingleRsp UpdateSubject(SubjectReq subject)
        {
            var res = new SingleRsp();
            Subject subjects = new Subject();
            subjects.SubjectId = subject.SubjectId;
            subjects.SubjectName = subject.SubjectName;

            res = _rep.UpdateSubject(subjects);
            return res;
        }

        public SingleRsp DeleteSubject(int id)
        {
            var res = new SingleRsp();
            res = _rep.DeleteSubject(id);
            return res;
        }
        #endregion
    }
}
