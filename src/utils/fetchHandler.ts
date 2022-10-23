import { FormData } from '../components/UserForm';

const api_url: string | undefined | null = import.meta.env.VITE_API_URL;

class FetchHandler {
  async signupHandler(formData: FormData) {
    const url = api_url + '/users';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return response;
  }
  async loginHandler(formData: FormData) {
    const url = api_url + '/auth/login';
    const response = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    return response;
  }
}

export default new FetchHandler();
