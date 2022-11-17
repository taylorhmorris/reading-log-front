import axios from 'axios';
import { FormData } from '../../components/UserForm';

const api_url: string = import.meta.env.VITE_API_URL;

async function createUser(formData: FormData) {
  const { email, username, password } = formData;
  return axios(`${api_url}/users`, {
    method: 'post',
    data: {
      email,
      username,
      password,
    },
  });
}

export { createUser };
