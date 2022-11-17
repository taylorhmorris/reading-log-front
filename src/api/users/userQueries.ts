import axios from 'axios';

const api_url: string = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('id_token');

const axios_instance = axios.create({
  baseURL: api_url,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

async function queryUser(user_id: string) {
  return axios_instance({
    method: 'get',
    url: `users/${user_id}`,
  });
}

export { queryUser };
