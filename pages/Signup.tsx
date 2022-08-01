import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Signup.module.css'

const Signup: NextPage = () => {

    // state of form inputs
    const [ formState, setFormState ] = useState({ username: '', email: '', password: '' });

    // router for page refresh/redirect
    let router = useRouter();

    // updates formState with current form input values
    // typescript type set for form event copied from https://stackoverflow.com/questions/42081549/typescript-react-event-types | original authors: cham, Edwin, Nitzan tomer
    const inputChangeHandler = (event: React.FormEvent<EventTarget>): void => {
        let target = event.target as HTMLInputElement;
        const { name, value } = target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const formSubmitHandler = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();

        const { username, email, password } = formState;

        // test for fetch request to API handler in pages/api/hello.ts
        try {
            fetch('/api/hello', {
              method: 'POST',
              body: JSON.stringify({
                  username: username,
                  email: email,
                  password: password
              }),
            })
            .then(res => {
              res.json().then(data => console.log(data))
            });
        }
        catch(err) {
            console.error(err);
        }
        finally {
            setFormState({
                username: '',
                email: '',
                password: ''
            });

            router.reload();
        }
    }

    return (
        <section>
            <form
                id={'signup-form'} className={styles.form}
                onSubmit={formSubmitHandler}
            >
                <label htmlFor='username'>Username </label>
                <input
                    type='text'
                    name='username'
                    className={styles.input}
                    onChange={inputChangeHandler}
                />
                <label htmlFor='email'>Email </label>
                <input
                    type='email'
                    name='email'
                    className={styles.input}
                    onChange={inputChangeHandler}
                />
                <label htmlFor='password'>Password </label>
                <input
                    type='password'
                    name='password'
                    className={styles.input}
                    onChange={inputChangeHandler}
                />
                <br />
                <button
                    type='submit'
                    className={styles.btn}
                    onClick={formSubmitHandler}
                >Create Account
                </button>
            </form>
        </section>
    )
}

export default Signup