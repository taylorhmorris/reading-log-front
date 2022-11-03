import { FormData } from '../components/UserForm';

const api_url: string | undefined | null = import.meta.env.VITE_API_URL;

class UserFetchHandler {
  async signup(formData: FormData) {
    const url = api_url + '/users';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const login_res = await this.login(formData);
      if (login_res) return login_res;
    }
    return response;
  }
  async login(formData: FormData) {
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

export default new UserFetchHandler();
