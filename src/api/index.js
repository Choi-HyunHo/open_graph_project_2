import axios from 'axios'

export const testinstance = axios.create({
  baseURL: 'http://192.168.0.212:8080',
  timeout: 10000,
})
