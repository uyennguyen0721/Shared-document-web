import API, { endpoints } from "./API"

class UserApi {
    login = (data) => {
        return API.post(`${endpoints['User']}login`, data, {
            Headers: 'multipart/form-data'
        });
    }

    register = (data) => {
        return API.post(`${endpoints['User']}create-user/`, data, {
            Headers: 'multipart/form-data'
        });
    }
}

const userApi = new UserApi()
export default userApi