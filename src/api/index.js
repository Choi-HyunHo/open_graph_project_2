import axios from 'axios'

// 재사용성 및 관리
export const testinstance = axios.create({
  baseURL: 'http://192.168.0.212:8080',
  timeout: 10000,
})
