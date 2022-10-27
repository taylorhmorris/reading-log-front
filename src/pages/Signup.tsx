import { UserForm } from '../components/UserForm';
import '../styles/global.css';

export function Signup() {
  return (
    <section>
      <h2>This is the singup page</h2>
      <UserForm signup={true} />
    </section>
  );
}
