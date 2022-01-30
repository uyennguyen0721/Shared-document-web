import API, { endpoints } from "./API"

class SubjectApi {
    getAllSubject = () => {
        return API.get(`${endpoints['Subject']}get-all/`)
    }
}

const subjectApi = new SubjectApi()
export default subjectApi