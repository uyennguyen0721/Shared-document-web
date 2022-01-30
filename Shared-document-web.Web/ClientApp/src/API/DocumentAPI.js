import API, { endpoints } from "./API"

class DocumentApi {
    getAllDocument = () => {
        return API.get(`${endpoints['Document']}get-all/`)
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

    getById = (data) => {
        return API.post(`${endpoints['Document']}get-by-id/`, data)
    }

    uploadDocument = (data) => {
        return API.post(`${endpoints['Document']}upload-document/`, data, {
            Headers: 'multipart/form-data',
        })
    }
}

const documentApi = new DocumentApi()
export default documentApi