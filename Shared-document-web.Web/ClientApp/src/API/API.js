import axios from "axios"
import queryString from 'query-string'
import {BaseURL} from "./BaseUrl"

export let endpoints = {
  Document: '/api/Document/',
  User: 'api/User/',
  Subject: 'api/Subject/',
  Comment: 'api/Comment/',
  Like: 'api/Like/',
}

const API = axios.create({
  baseURL: BaseURL,
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: params => queryString.stringify(params),
})

API.interceptors.response.use((response) => {
  if(response && response.data) return response.data

  return response
}, (error) => {

  throw error
})


export default API