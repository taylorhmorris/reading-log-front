import axios from 'axios';
import { FormData } from '../../components/UserForm';

const api_url: string = import.meta.env.VITE_API_URL;

const axios_instance = axios.create({
  baseURL: api_url,
  timeout: 30000,
});

async function loginUser(formData: FormData) {
  return axios_instance({
    method: 'post',
    url: '/auth/login',
    data: formData,
  });
}

export { loginUser };
