import axios from 'axios'

export const testinstance = axios.create({
  //baseURL: 'http://192.168.0.212', // 배포 서버 url
  baseURL: 'http://192.168.0.86:8080',
  timeout: 10000,
})
