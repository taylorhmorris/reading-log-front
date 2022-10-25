import { useUserContext } from '../context/UserContext';

export function Home() {
  const { loggedIn, updateLoggedIn } = useUserContext();

  return (
    <section>
      <h2>This is the home page</h2>
      <h3>Logged in? {loggedIn ? 'Yes' : 'No'}</h3>
      <button onClick={() => updateLoggedIn()}>log in/out</button>
    </section>
  );
}
