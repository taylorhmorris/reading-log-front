import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { queryUser } from '../api/users/userQueries';

interface HomeProps {
  loggedIn: boolean;
}

export function Home({ loggedIn }: HomeProps) {
  if (loggedIn) return <Dashboard />;
  return (
    <div>
      <a href="/login">Log In</a>
      <br />
      <a href="/signup">Create Account</a>
    </div>
  );
}

function Dashboard() {
  const [username, setUsername] = useState('');
  // const query = useQuery(['users'], () => queryUser());

  // if (query.isLoading) return <section>Loading...</section>;
  // if (query.isError) console.error(query.error);
  // if (query.data) setUsername(query.data.data.username);

  return (
    <section>
      <h2>Welcome, {username}</h2>
    </section>
  );
}