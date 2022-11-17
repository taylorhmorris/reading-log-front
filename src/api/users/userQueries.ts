import axios from 'axios';
import { getStoredData } from '../../utils/dataStore';

const api_url: string = import.meta.env.VITE_API_URL;

async function getUser() {
  const { token, user_id } = await getStoredData();
  const url = `${api_url}/users/${user_id}`;

  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export { getUser };
