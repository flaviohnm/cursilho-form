import { useNavigate } from 'react-router-dom'
import CursilhistaForm from '../cursilhista/CursilhistaForm'
import styles from './NewInscription.module.css'

function NewProject() {
    const navigate = useNavigate()

    function createPost(projetc) {
        // initialize cost and services
        projetc.cost = 0
        projetc.services = []

        fetch('http://localhost:3001/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projetc),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                navigate('/',{state:{message:'Inscrição realizada com Sucesso!'}})
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Formulário de Inscrição</h1>
            <p>Dados Pessoais</p>
            <CursilhistaForm handleSubmit={createPost} btnText="enviar" />
        </div>
    )
}

export default NewProject