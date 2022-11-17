import axios from 'axios';
import { FormData } from '../../components/UserForm';

const api_url: string = import.meta.env.VITE_API_URL;

async function loginUser(formData: FormData) {
  const { username, password } = formData;
  return axios(`${api_url}/auth/login`, {
    method: 'post',
    data: {
      username,
      password,
    },
  });
}

export { loginUser };
