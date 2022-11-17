import axios from 'axios';

const api_url: string = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('id_token');

const axios_instance = axios.create({
  baseURL: api_url,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

function getUser(user_id: string | null) {
  if (user_id !== null) {
    const response = axios_instance({
      method: 'get',
      url: `users/${user_id}`,
    });
    return response;
  }
}

export { getUser };
