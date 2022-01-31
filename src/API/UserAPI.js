import API, { endpoints } from "./API"

class UserApi {
    login = (data) => {
        return API.post(`${endpoints['User']}login/`, data, {
            Headers: 'multipart/form-data'
        });
    }
    postAllUser = () => {
        return API.post(`${endpoints['User']}get-by-all/`)
    }
    deleteUser = (id) => {
        return API.delete(`${endpoints['User']}delete-document?id=${id}`)
    }
}

const userApi = new UserApi()
export default userApi