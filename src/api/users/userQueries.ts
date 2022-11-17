import axios from 'axios';

const api_url: string = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('id_token');
const user_id = localStorage.getItem('user_id');

const axios_instance = axios.create({
  baseURL: api_url,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

async function queryUser() {
  const response = axios_instance({
    method: 'get',
    url: `users/${user_id}`,
  });
  return response;
}

export { queryUser };
