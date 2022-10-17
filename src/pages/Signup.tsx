import { UserForm } from '../components/UserForm';

export function Signup() {
  return (
    <section>
      <h2>This is the singup page</h2>
      <UserForm signup={true} />
    </section>
  );
}
