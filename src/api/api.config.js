import axios from 'axios'

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
}
const baseURL = process.env.REACT_APP_BASE_URL

console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL)

const axiosClient = axios.create({
  headers,
  baseURL
})

axiosClient.interceptors.request.use(async function (config) {
  const token = await localStorage.getItem('JWT')
  if (token) {
    config.headers.authorization = token
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosClient.interceptors.response.use(async function  (response) {
  if (response.headers.authorization) {
   await localStorage.setItem('JWT',response.headers.authorization)
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

export {
  axiosClient,
  headers,
  baseURL,
}

