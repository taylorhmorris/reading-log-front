import { useRef } from 'react';
import styles from '../styles/userForm.module.css';

export type UserFormProps = {
  signup: boolean;
};
type FormData = {
  username: string;
  password: string;
  email?: string | undefined;
};

export function UserForm({ signup }: UserFormProps) {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email: string | undefined = emailRef.current?.value;
    const username: string | undefined = usernameRef.current?.value;
    const password: string | undefined = passwordRef.current?.value;

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
    alert(`
      email: ${formData.email}
      username: ${formData.username}
      password: ${formData.password}
    `);
    if (emailRef.current) emailRef.current.value = '';
    if (usernameRef.current) usernameRef.current.value = '';
    if (passwordRef.current) passwordRef.current.value = '';
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
