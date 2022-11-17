import axios from 'axios';
import { FormData } from '../components/UserForm';

const api_url: string = import.meta.env.VITE_API_URL;

const axios_instance = axios.create({
  baseURL: api_url,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function login(formData: FormData) {
  return axios_instance({
    method: 'post',
    url: '/auth/login',
    data: formData,
  });
}

async function signup(formData: FormData) {
  return axios_instance({
    method: 'post',
    url: '/users',
    data: formData,
  });
}

export { signup, login };
