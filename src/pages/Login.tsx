import { UserForm } from '../components/UserForm';

export function Login() {
  return (
    <section>
      <h2>This is the login page</h2>
      <UserForm signup={false} />
    </section>
  );
}
