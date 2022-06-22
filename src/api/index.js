import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://192.168.0.212:7000', // 배포 서버 url
  timeout: 10000,
});

export const testinstance = axios.create({
  baseURL: 'http://192.168.0.86:7000', // 로컬
  timeout: 10000,
});
