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
    public class HistoryRep : GenericRep<sharedwebContext, History>
    {
        #region -- Overrides --
        public override History Read(int id)
        {
            var res = All.FirstOrDefault(p => p.HistoryId == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = base.All.First(i => i.HistoryId == id);
            m = base.Delete(m);
            return m.HistoryId;
        }
        #endregion
    }
}
