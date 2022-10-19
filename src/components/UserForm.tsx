import { useRef, useState } from 'react';
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

  const [missing, setMissing] = useState({ em: false, un: false, pw: false });

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email: string | undefined = emailRef.current?.value;
    const username: string | undefined = usernameRef.current?.value;
    const password: string | undefined = passwordRef.current?.value;

    if (signup && !email) {
      emailRef.current?.focus();
      setMissing({ ...missing, em: true });
      return;
    }
    if (!username) {
      usernameRef.current?.focus();
      setMissing({ ...missing, un: true });
      return;
    }
    if (!password) {
      passwordRef.current?.focus();
      setMissing({ ...missing, pw: true });
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
        <div className={styles['form-input']}>
          {missing.em && <span className={styles.error}>*</span>}
          <input
            name="email"
            type="email"
            placeholder="Email"
            ref={emailRef}
            onChange={() => {
              setMissing({ ...missing, em: false });
            }}
          />
        </div>
      )}
      <div className={styles['form-input']}>
        {missing.un && <span className={styles.error}>*</span>}
        <input
          name="username"
          type="text"
          placeholder="Username"
          ref={usernameRef}
          onChange={() => {
            setMissing({ ...missing, un: false });
          }}
        />
      </div>
      <div className={styles['form-input']}>
        {missing.pw && <span className={styles.error}>*</span>}
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          onChange={() => {
            setMissing({ ...missing, pw: false });
          }}
        />
      </div>
      <button type="submit" className={styles['form-btn']}>
        Submit
      </button>
    </form>
  );
}
