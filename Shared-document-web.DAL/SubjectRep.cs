using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared_document_web.Common.DAL;

namespace Shared_document_web.DAL
{
    using Models;
    public class SubjectRep : GenericRep<sharedwebContext, Subject>
    {
        #region -- Overrides --
        public override Subject Read(int id)
        {
            var res = All.FirstOrDefault(p => p.SubjectId == id);
            return res;
        }
        #endregion
    }
}
