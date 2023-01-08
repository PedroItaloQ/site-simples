import styles from './Registrar.module.css'

function Registrar() {
    return(
        <div className={styles.cadastro}>
            <p>Nome Completo:</p>
            <input className={styles.inpu} type='text' placeholder='Digite primeiro nome...'/>
            <input className={styles.inpu} type='text' placeholder='Digite sobrenome...'/>
            <p>Email:</p>
            <input className={styles.inpu} type='email' placeholder='Digite seu email...'/>
            <p>Número telefone:</p>
            <input className={styles.inpu} type='number' placeholder='Digite seu número...'/>
            <p>Endereço:</p>
            <input className={styles.inpu} type='text' placeholder='Endereço'/><br/>
            <input className={styles.inpu} type='text' placeholder='Cidade'/>
            <input className={styles.inpu} type='text' placeholder='Estado'/><br/>
            <input className={styles.inpu} type='text' placeholder='CEP'/>
            <input className={styles.inpu} type='text' placeholder='País'/><br/>
            <button className={styles.button}>Enviar</button>
        </div>
    )
}

export default Registrar