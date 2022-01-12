import API, { endpoints } from "./API"

class UserApi {
    login = (data) => {
        return API.post(`${endpoints['User']}login/`, data, {
            Headers: 'multipart/form-data'
        });
    }
}

const userApi = new UserApi()
export default userApi