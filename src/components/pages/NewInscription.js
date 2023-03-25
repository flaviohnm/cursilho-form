import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import CursilhistaForm from '../cursilhista/CursilhistaForm'
import Message from '../layout/Message'
import styles from './NewInscription.module.css'

function NewInscription() {

    const navigate = useNavigate()

    const [cursilhistaMessage, setCursilhistaMessage] = useState('')

    function createPost(cursilhista) {

        cursilhista.id = uuidv4()

        fetch('http://localhost:3002/cursilhistas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cursilhista),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setCursilhistaMessage('Inscrição realizada com sucesso!')
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newinscription_container}>
            <h1>Formulário de Inscrição</h1>
            {cursilhistaMessage && <Message type="success" msg={cursilhistaMessage} />}
            <CursilhistaForm handleSubmit={createPost} btnText="enviar" />
        </div>
    )
}

export default NewInscription