import axios from 'axios';
import { FormData } from '../../components/UserForm';

const api_url: string = import.meta.env.VITE_API_URL;
// const token = localStorage.getItem('id_token');

// const axios_instance_with_auth = axios.create({
//   baseURL: api_url,
//   timeout: 30000,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
// });

function createUser(formData: FormData) {
  return axios.post(`${api_url}/users/`, {
    data: formData,
  });
}

export { createUser };
