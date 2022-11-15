import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import UserFetchHandler from '../utils/userFetchHandler';

async function getUsername(id: number) {
  let username = '';
  try {
    const data = await UserFetchHandler.get_user(id);
    console.log(data);
    username = data.username;
  } catch (err) {
    console.error(err);
  }
  return username;
}

export function Home() {
  const { loggedIn } = useUserContext();
  const user_id = localStorage.getItem('user_id') || null;

  const [username, setUsername] = useState('');

  useEffect(() => {
    if (user_id !== null) {
      try {
        getUsername(parseInt(user_id)).then((name) => {
          if (name) setUsername(name);
        });
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

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
