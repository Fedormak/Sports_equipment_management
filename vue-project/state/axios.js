import axios from 'axios';

// axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'http://10.147.17.227:8000', // Укажите базовый URL вашего API
  headers: { 'Content-Type': 'application/json' }
});

export default instance;