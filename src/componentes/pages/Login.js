import styles from './Login.module.css'

function Login() {
    return(
        <div  className={styles.form}>
            <h2 className={styles.bemvindo}>Seja bem Vindo!</h2>
            <form>
                <p className={styles.titulos}>email:</p>
                <input className={styles.inputs} type='email' placeholder='Digite seu email...'/>
                <p className={styles.titulos}>Senha</p>
                <input className={styles.inputs} type='password' placeholder='Digite sua senha...'/>
            </form>
                <button className={styles.button}>Entrar:</button>
        </div>
    )
}

export default Login