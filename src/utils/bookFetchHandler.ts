const api_url: string | undefined | null = import.meta.env.VITE_API_URL;
const books_url = api_url + '/books';
const token = localStorage.getItem('id_token');

type NewBook = {
  ownerId: number;
  authorId: number;
  title: string;
  length: number;
  languageId: number;
  publicationDate: string | Date;
  edition: string;
};

class BookFetchHandler {
  async get_books() {
    const response = await fetch(books_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    return response;
  }
  async get_book(id: number) {
    const url = books_url + `/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    return response;
  }
  async create_book(bookData: NewBook) {
    const response = await fetch(books_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookData),
    });
    return response;
  }
  async delete_book(id: number) {
    const url = books_url + `/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}

export default new BookFetchHandler();
