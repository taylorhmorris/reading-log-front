/* eslint-disable prettier/prettier */
import { FormData } from '../components/UserForm';

export default async function fetchHandler(formData: FormData, signup: boolean) {
  const api_url = import.meta.env.VITE_API_URL;
  let url;
  signup
    ? url = api_url + '/users'
    : url = api_url + '/auth/login';

  const response = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });

  return response;
};