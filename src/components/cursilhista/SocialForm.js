import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';


function SocialForm({ cursilhista, handleChange }) {

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
        <div>
            <Select
                name="estadocivil"
                text="Informe o seu estado civil"
                options={estadoCivil}
                handleOnchange={handleChange}
                value={cursilhista.estadocivil || ""}
            />
            {(cursilhista.estadocivil === '2') && (
                <Input
                    type="text"
                    text="Nome do Conjugê"
                    name="conjugeName"
                    placeholder="Informe o nome do conjugê"
                    handleOnchange={handleChange}
                    value={cursilhista.conjugeName || ""}
                />
            )}
            {(cursilhista.estadocivil === '2') && (
                <Input
                    type="tel"
                    text="Telefone do Conjugê"
                    name="conjugePhoneNumber"
                    placeholder="XX-XXXXX-XXXX"
                    handleOnchange={handleChange}
                    value={cursilhista.conjugePhoneNumber || ""}
                />
            )}
            <Input
                type="text"
                text="Nome do contato de Emergência"
                name="emergencyName"
                placeholder="Informe o nome do contato de emergência"
                handleOnchange={handleChange}
                value={cursilhista.emergencyName || ""}
            />
            <Input
                type="text"
                text="Telefone do contato de Emergência"
                name="emergencyPhoneNumber"
                placeholder="XX-XXXXX-XXXX"
                handleOnchange={handleChange}
                value={cursilhista.emergencyPhoneNumber || ""}
            />
        </div>
    )
}

export default SocialForm