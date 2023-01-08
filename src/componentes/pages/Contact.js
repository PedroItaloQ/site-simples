import styles from './Contact.module.css'

function Contact() {
    return(
        <div className={styles.contatos}>
            <h1>Contatos:</h1>
            <p>EMAIL: Meusite@gmail.com</p>
            <p>Número: 90905849</p>

            <h1>Localização:</h1>
            <p>Fortaleza, CE</p>
            <p>RUA: Qualquer, n° 29</p>
        </div>
    )
}

export default Contact;