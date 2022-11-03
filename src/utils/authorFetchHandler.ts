// import { useUserContext } from '../context/UserContext';

const api_url: string | undefined | null = import.meta.env.VITE_API_URL;
const authors_url = api_url + '/authors';
const token = localStorage.getItem('id_token');

class AuthorFetchHandler {
  async get_authors() {
    const response = await fetch(authors_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    return response;
  }
  async get_author(id: number) {
    const url = authors_url + `/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    return response;
  }
}

export default new AuthorFetchHandler();
