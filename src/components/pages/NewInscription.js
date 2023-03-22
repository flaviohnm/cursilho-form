import { useNavigate } from 'react-router-dom'
import CursilhistaForm from '../cursilhista/CursilhistaForm'
import styles from './NewInscription.module.css'

function NewInscription() {

    const navigate = useNavigate()

    function createPost(cursilhista) {

        fetch('http://localhost:3002/cursilhista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cursilhista),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                navigate('/', { state: { message: 'Inscrição realizada com Sucesso!' } })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newinscription_container}>
            <h1>Formulário de Inscrição</h1>
            <CursilhistaForm handleSubmit={createPost} btnText="enviar" />
        </div>
    )
}

export default NewInscription