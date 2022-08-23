import type { NextPage } from 'next'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { Context } from '../Context'
import styles from '../styles/Signup.module.css'
import AuthService from '../utils/auth'

const Signup: NextPage = () => {

    // global context
    const [ context, setContext ] = useContext(Context);

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
        data: {
            username: string,
            email: string,
            password: string
        }
    ) => {
        const url = process.env.NEXT_PUBLIC_API_URL + '/auth/login';
        let password = data.password.toString();

        try {
            fetch(url, {
              method: 'POST',
              body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: password
              }),
              headers: {'Content-Type': 'application/json'},
              mode: 'cors'
            })
            .then(res => {
              res.json()
              .then(data => {
                AuthService.login(data.access_token);
                setContext({ 
                    userId: data.id
                });
                router.replace('/');
              })
            });
        }
        catch(err) {
            console.error(err);
        }
    };

    const loginSubmitHandler = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();

        const { username, email, password } = formState;

        if (!username || !email || !password) {
            alert('Please fill out all information before loggin in!')
            return;
        }

        const data = {
            username: username,
            email: email,
            password: password
        };
        fetchHandler(data);
    }

    return (
        <Layout>
            <section className={styles.signup}>
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
                            name='login'
                            type='button'
                            className={styles.btn}
                            onClick={loginSubmitHandler}
                        >Login
                        </button>
                    </div>
                    <Link href='/signup'>
                        <a className={styles.navlink}>
                            Sign Up
                        </a>
                    </Link>
                </form>
            </section>
        </Layout>
    )
}

export default Signup