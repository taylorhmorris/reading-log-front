import { useRef } from 'react';
import UserFetchHandler from '../utils/userFetchHandler';
import AuthService from '../utils/auth';
import styles from '../styles/userForm.module.css';

export type UserFormProps = {
  signup: boolean;
};
export type FormData = {
  username: string;
  password: string;
  email?: string | undefined;
};

export function UserForm({ signup }: UserFormProps) {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  async function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email: string | undefined = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (signup && !email) {
      emailRef.current?.focus();
      return;
    }
    if (!username) {
      usernameRef.current?.focus();
      return;
    }
    if (!password) {
      passwordRef.current?.focus();
      return;
    }

    const formData: FormData = { username, password, email };
    try {
      let res;
      signup
        ? (res = await UserFetchHandler.signup(formData))
        : (res = await UserFetchHandler.login(formData));

      if (res.ok === false || res.error) {
        console.error(res);
        res.error
          ? alert(`Error code ${res.statusCode}: ${res.message}`)
          : alert(`Error code ${res.status}: ${res.statusText}`);
        return;
      }

      AuthService.login(res);
      window.location.assign('/');
    } catch (err) {
      console.error(err);
      alert("Somethin' ain't right...");
      return;
    }
  }

  return (
    <form onSubmit={formSubmit} className={styles.form}>
      {signup && (
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          ref={emailRef}
        />
      )}
      <input
        name="username"
        type="text"
        placeholder="Username"
        required
        ref={usernameRef}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        ref={passwordRef}
      />
      <button type="submit" className={styles['form-btn']}>
        {signup ? <>Create Account</> : <>Log In</>}
      </button>
      <div>
        {signup ? (
          <a href="/login" className={styles.link}>
            Log In
          </a>
        ) : (
          <a href="/signup" className={styles.link}>
            Sign Up
          </a>
        )}
      </div>
    </form>
  );
}
