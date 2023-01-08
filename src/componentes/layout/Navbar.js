import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import Container from './Container'

function Navbar() {
    return (
        
        <div className={styles.menu}>
            <nav className={styles.list}>
                <Container>
                    <div className={styles.links}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Contact'>Contato</NavLink>
                    <NavLink to='/Company'>Companhia</NavLink>
                    <NavLink to='/NewProject'>Serviços</NavLink>
                    </div>
                    <div className={styles.cadastro}>
                    <NavLink className={styles.login} to='/Login'>Login</NavLink>
                    <NavLink className={styles.registrar} to='/Registrar'>Cadastro</NavLink>
                    </div>
                </Container>
            </nav>
        </div>
    )
}

export default Navbar;