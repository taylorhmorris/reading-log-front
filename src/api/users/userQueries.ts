import axios from 'axios';

const api_url: string = import.meta.env.VITE_API_URL;

async function getStoredData() {
  const token = localStorage.getItem('id_token');
  const user_id = await localStorage.getItem('user_id');
  return { token, user_id };
}

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
