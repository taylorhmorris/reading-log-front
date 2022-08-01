import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Signup.module.css'

const Signup: NextPage = () => {

    // state of form inputs
    const [ formState, setFormState ] = useState({ email: '', password: '' });

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

    return (
        <section>
            <form id={'signup-form'} className={styles.form}>
                <label htmlFor='email'>Email </label>
                <input
                    type='text'
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
                >Sign Up
                </button>
            </form>
        </section>
    )
}

export default Signup