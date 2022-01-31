import API, { endpoints } from "./API"

class CommenttApi {
    getAllCommentByDocument = (id) => {
        return API.get(`${endpoints['Comment']}get-comments-by-document`, {params: {id: id}})
    }

    addComment = (data) => {
        return API.post(`${endpoints['Comment']}add-comment`, data)
    }
}

const commenttApi = new CommenttApi()
export default commenttApi