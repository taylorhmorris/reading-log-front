import { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import { queryUser } from '../api/users/userQueries';

export function Home() {
  const { loggedIn } = useUserContext();
  const user_id = localStorage.getItem('user_id') || null;

  const [username, setUsername] = useState('');

  if (user_id != null) {
    const { isLoading, error, data } = useQuery(['users'], () => {
      queryUser(user_id);
    });

    if (isLoading) console.log(isLoading);
    if (error) console.log(error);
    if (data) console.log(data);
  }

  return (
    <section>
      {loggedIn ? (
        <h2>Welcome, {username}</h2>
      ) : (
        <div>
          <a href="/login">Log In</a>
          <br />
          <a href="/signup">Create Account</a>
        </div>
      )}
    </section>
  );
}
