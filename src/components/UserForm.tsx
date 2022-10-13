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
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    email: '',
  });
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      const email = emailRef.current?.value;

      setFormData({
        username,
        password,
        email,
      });
    }
  }

  return (
    <div className={styles['user-form']}>
      <form onSubmit={formSubmit} className={styles.form}>
        {signup && (
          // eslint-disable-next-line prettier/prettier
          <input
            name="email"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
        )}
        <input
          name="username"
          type="text"
          placeholder="Username"
          ref={usernameRef}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button type="submit" className={styles['form-btn']}>
          Submit
        </button>
      </form>
    </div>
  );
}
