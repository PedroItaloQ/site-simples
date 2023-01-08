import styles from './Home.module.css'
import logo from '../../imgs/images.png'

function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.frase}>
                <h1 className={styles.fraseprincipal}>Construa agora o seu FUTURO</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div>
                <img className={styles.image} src={logo} alt='Imagem'/>
            </div>
        </div>
    )
}

export default Home;