/* eslint-disable prettier/prettier */
import { FormData } from '../components/UserForm';

async function loginHandler(formData: FormData) {
  const api_url = import.meta.env.VITE_API_URL;
  const url = api_url + '/auth/login';

  const response = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });

  return response;
};

async function signupHandler(formData: FormData) {
  const api_url = import.meta.env.VITE_API_URL;
  const url = api_url + '/auth/login';

  const response = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });

  return response;
};

export { loginHandler, signupHandler };