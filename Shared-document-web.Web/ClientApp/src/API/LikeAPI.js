import API, { endpoints } from "./API"

class LikeApi {
    getAllLikeByDocument = (id) => {
        return API.get(`${endpoints['Like']}get-likes-by-document`, {params: {id: id}})
    }

    addLike = (data) => {
        return API.post(`${endpoints['Like']}create-like`, data)
    }

    deleteLike = (id) => {
        return API.delete(`${endpoints['Like']}delete-like`, {params: {id: id}})
    }
}

const likeApi = new LikeApi()
export default likeApi