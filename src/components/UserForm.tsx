import { useState, useRef } from 'react';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
  }

  return (
    <div className={styles['user-form']}>
      <form onSubmit={formSubmit} className={styles.form}>
        {signup && (
          <input
            name="email"
            type="email"
            placeholder="Email"
            ref={emailRef}
            onChange={(e: React.FormEvent<EventTarget>) => {
              const target = e.target as HTMLInputElement;
              setEmail(target.value);
            }}
          />
        )}
        <input
          name="username"
          type="text"
          placeholder="Username"
          ref={usernameRef}
          onChange={(e: React.FormEvent<EventTarget>) => {
            const target = e.target as HTMLInputElement;
            setUsername(target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          onChange={(e: React.FormEvent<EventTarget>) => {
            const target = e.target as HTMLInputElement;
            setPassword(target.value);
          }}
        />
        <button type="submit" className={styles['form-btn']}>
          Submit
        </button>
      </form>
    </div>
  );
}
