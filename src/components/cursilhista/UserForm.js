import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import styles from './CursilhistaForm.module.css'

function UserForm({ cursilhista, updateFieldHandler }) {

    const [estadoCivil, setEstadoCivil] = useState([])

    useEffect(() => {
        fetch("http://localhost:3002/estadocivil", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setEstadoCivil(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome Completo"
                name="fullName"
                placeholder="Digite o nome completo"
                value={cursilhista.name}
                onChange={(e) => updateFieldHandler("name", e.target.value)}
            />
            <Input
                type="text"
                text="Nome do Crachá"
                name="displayName"
                placeholder="Digite o nome que será usado no crachá"
            />
            <Input
                type="text"
                text="CPF"
                name="cpf"
                placeholder="Informe apenas os números do CPF"
            />
            <Input
                type="email"
                text="E-mail"
                name="email"
                placeholder="Digite o seu e-mail"
            />
            <Input
                type="tel"
                text="Telefone"
                name="phoneNumber"
                placeholder="XX-XXXXX-XXXX"
            />
            <Input
                type="date"
                text="Data de Aniversário"
                name="birthDate"
                placeholder="XX-XXXXX-XXXX"
            />
            <Select
                name="estadocivil_id"
                text="Estado Civil"
                options={estadoCivil}
            />
        </form>
    )
}

export default UserForm