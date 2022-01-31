namespace Shared_document_web.Common.Req
{
    public class SearchDocumentReq
    {
        public int Page { get; set; }
        public int Size { get; set; }
        public int Id { get; set; }
        public string Type { get; set; }
        public string Keyword { get; set; }
    }
}
