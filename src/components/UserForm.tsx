import styles from '../styles/userForm.module.css';

export type UserFormProps = {
  signup: boolean;
};

export function UserForm({ signup }: UserFormProps) {
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submit');
  };

  return (
    <div className={styles['user-form']}>
      <form onSubmit={formSubmit} className={styles.form}>
        {signup && <input name="email" type="email" placeholder="Email" />}
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit" className={styles['form-btn']}>
          Submit
        </button>
      </form>
    </div>
  );
}
