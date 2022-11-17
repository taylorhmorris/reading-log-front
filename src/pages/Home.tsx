import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/users/userQueries';

interface HomeProps {
  loggedIn: boolean;
}
interface DashboardProps {
  username: string;
}

export function Home({ loggedIn }: HomeProps) {
  const query = useQuery(['users'], async () => {
    const data = await getUser();
    return data;
  });

  if (loggedIn) {
    if (query.isLoading) return <div>Loading...</div>;
    if (query.isError) return <div>Error!</div>;
    if (query.isSuccess) {
      const { username } = query.data.data;
      return <Dashboard username={username} />;
    }
  }
  return <LoggedOut />;
}

function Dashboard({ username }: DashboardProps) {
  return (
    <section>
      <h2>Welcome, {username}</h2>
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
  );
}
