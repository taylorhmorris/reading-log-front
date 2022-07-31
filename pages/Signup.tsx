import styles from '../styles/Signup.module.css'

export default function Signup() {
    return (
        <section>
            <form id={'signup-form'} className={styles.form}>
                <label htmlFor='email'>Email </label>
                <input
                    type='text'
                    name='email'
                    className={styles.input}
                />
                <label htmlFor='password'>Password </label>
                <input
                    type='password'
                    name='password'
                    className={styles.input}
                />
                <br />
                <button
                    type='submit'
                    className={styles.btn}
                >
                    Sign Up
                </button>
            </form>
        </section>
    )
}