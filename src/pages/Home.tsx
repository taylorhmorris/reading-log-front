/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/users/userQueries';

interface HomeProps {
  loggedIn: boolean;
}
// interface DashboardProps {
//   userId: string;
// }

export function Home({ loggedIn }: HomeProps) {
  if (loggedIn) return <Dashboard />
  return <LoggedOut />;
}

function Dashboard() {
  const { userId } = useUserContext();
  useEffect(() => console.log(userId), [userId]);

  const query = useQuery(['users'], () => getUser(userId));

  return (
    <section>
      {!query && <></>}
      {query.isLoading ? (
        'Loading...'
      ) : query.isError ? (
        'Error!'
      ) : query.data ? (
        <h2>Welcome, {query.data.data.username}</h2>
      ) : null}
    </section>
  );
}

function LoggedOut() {
  return (
    <div>
      <a href="/login">Log In</a>
      <br />
      <a href="/signup">Create Account</a>
    </div>
  )
}
