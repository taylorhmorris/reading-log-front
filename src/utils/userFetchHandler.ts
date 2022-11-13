import { FormData } from '../components/UserForm';

const api_url: string | undefined | null = import.meta.env.VITE_API_URL;

class UserFetchHandler {
  async signup(formData: FormData) {
    const url = api_url + '/users';

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res.ok) {
          return this.login(formData);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  async login(formData: FormData) {
    const url = api_url + '/auth/login';
    try {
      const response = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      return response;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new UserFetchHandler();
