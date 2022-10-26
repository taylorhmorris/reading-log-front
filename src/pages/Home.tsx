import { useUserContext } from '../context/UserContext';

export function Home() {
  const { loggedIn } = useUserContext();

  return (
    <section>
      <h2>This is the home page</h2>
      {loggedIn ? (
        <div>You are logged in</div>
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
