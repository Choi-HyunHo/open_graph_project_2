import axios from 'axios'

export const testinstance = axios.create({
  baseURL: 'http://192.168.0.86:80',
  timeout: 10000,
})
