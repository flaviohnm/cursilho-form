import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'


function Navbar() {

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'> <img src="logo" alt="CursilhodaCristandade" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/inscricao'>Inscrição</Link></li>
                    <li className={styles.item}><Link to='/contato'>Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )

}

export default Navbar