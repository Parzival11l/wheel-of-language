import axios from 'axios'

const headers = {
  'Accept': 'application/json',
}
const baseURL = 'http://localhost:3000'


const axiosClient = axios.create({
  headers,
  baseURL
})

export {
  axiosClient,
  headers,
  baseURL,
}

