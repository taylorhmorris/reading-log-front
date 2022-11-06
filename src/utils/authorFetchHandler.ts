// import { useUserContext } from '../context/UserContext';

const api_url: string | undefined | null = import.meta.env.VITE_API_URL;
const authors_url = api_url + '/authors';
const token = localStorage.getItem('id_token');

type NewAuthor = {
  owner_id: number;
  first_names: string;
  last_name: string;
};

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
  async create_author(authorData: NewAuthor) {
    const response = await fetch(authors_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(authorData),
    });
    return response;
  }
  async delete_author(id: number) {
    const url = authors_url + `/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}

export default new AuthorFetchHandler();
