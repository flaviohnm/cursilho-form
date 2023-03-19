import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
function Home() {

    return (
        <section className = { styles.home_container } >
            <h1>Bem vindo ao <span>Cursilho da Cristandade 2023</span></h1>
            <p>Clique aqui e faça a sua inscrição!!</p>
            <LinkButton to="/inscricao" text="Inscrição" />
        </section>
    )

}

export default Home