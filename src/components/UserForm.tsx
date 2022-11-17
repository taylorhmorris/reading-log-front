import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../api/auth/userAuth';
import AuthService, { AuthResponse } from '../utils/auth';
import { useUpdateUserContext } from '../context/UserContext';
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
  const [loading, setLoading] = useState(false);

  const { toggleLoggedIn } = useUpdateUserContext();
  const navigate = useNavigate();

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
      setLoading(true);

      const { data, status } = signup
        ? await signupUser(formData)
        : await loginUser(formData);

      if (signup) {
        const { data, status } = await loginUser(formData);
        status == 201 ? AuthService.login(data as AuthResponse) : alert(status);
      } else {
        status == 201 ? AuthService.login(data as AuthResponse) : alert(status);
      }

      toggleLoggedIn();
      setLoading(false);
      navigate('/');
    } catch (err) {
      console.error(err);
      setLoading(false);
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
      {loading && <div>Please wait...</div>}
    </form>
  );
}
