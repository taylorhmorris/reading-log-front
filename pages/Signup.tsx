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

    const fetchHandler = (
        url: string,
        data: object
    ) => {
        // test for fetch request to API handler in pages/api/hello.ts
        try {
            fetch(url, {
              method: 'POST',
              body: JSON.stringify(data),
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
            router.replace('/');
        }
    };

    const signupSubmitHandler = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();

        const { username, email, password } = formState;

        if (!username || !email || !password) {
            alert('Please fill out all information before creating account!')
        }

        const data = {
            username: username,
            email: email,
            password: password
        };
        const url = '/api/hello';
        fetchHandler(url, data);
    };

    const loginSubmitHandler = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();

        const { email, password } = formState;

        if (!email || !password) {
            alert('Please fill out all information before loggin in!')
        }

        const data = {
            email: email,
            password: password
        };
        const url = '/api/hello';
        fetchHandler(url, data);
    }

    return (
        <section>
            <form id={'signup-form'} className={styles.form}>
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
                    required
                    className={styles.input}
                    onChange={inputChangeHandler}
                />
                <label htmlFor='password'>Password </label>
                <input
                    type='password'
                    name='password'
                    required
                    className={styles.input}
                    onChange={inputChangeHandler}
                />
                <div className={styles.btnContainer}>
                    <button
                        name='signup'
                        type='button'
                        className={styles.btn}
                        onClick={signupSubmitHandler}
                    >Create Account
                    </button>
                    <button
                        name='login'
                        type='button'
                        className={styles.btn}
                        onClick={loginSubmitHandler}
                    >Login
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Signup