import API, { endpoints } from "./API"

class DocumentApi {
    getAllDocument = () => {
        return API.get(`${endpoints['Document']}get-all/`)
    }

    deleteDocument = (id) => {
        return API.delete(`${endpoints['Document']}delete-document?id=${id}`)
    }

    checkDocument = (id) => {
        return API.post(`${endpoints['Document']}check-document?id=${id}`)
    }
    searchDocument = (keyword) => {
        const req = {
        "page": 1,
        "size": 10,
        "id": 0,
        "type": "",
        "keyword": keyword
        }

        return API.post(`${endpoints['Document']}search-document/`, req)
    }
}

const documentApi = new DocumentApi()
export default documentApi