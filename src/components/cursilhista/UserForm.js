import { cpf } from 'cpf-cnpj-validator';
import { useState } from 'react';
import styles from '../cursilhista/CursilhistaForm.module.css';
import Input from '../form/Input';
import InputCustomMask from '../form/InputCustomMask';
import Message from '../layout/Message';

function UserForm({ cursilhista, handleChange }) {

    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [isValidCPF, setIsValidCPF] = useState('')

    const validaCPF = (e) => {
        setIsValidCPF('');
    var cpfString = cpf.strip(e.target.value)
        if (cpf.isValid(cpfString)) {
            setIsValidCPF(true)
        }
        else {
            console.log('invalido')
            setMessage('CPF Inválido');
            setType('error');
            setIsValidCPF(false);
        }
    }

    return (
        <div>
            {(isValidCPF === false) && <Message type={type} msg={message} />}
            <Input
                type="text"
                text="Nome Completo"
                name="fullName"
                placeholder="Digite o nome completo"
                required={'required'}
                handleOnchange={handleChange}
                value={cursilhista.fullName || ""}
            />
            <Input
                type="text"
                text="Nome do Crachá"
                name="displayName"
                placeholder="Digite o nome que será usado no crachá"
                handleOnchange={handleChange}
                value={cursilhista.displayName || ""}
            />
            <InputCustomMask
                type="text"
                text="CPF"
                name="cpf"
                mask={'999.999.999-99'}
                placeholder="Digite apenas os números do CPF"
                onBlur={validaCPF}
                handleOnchange={handleChange}
                value={cursilhista.cpf}
            />
            <Input
                type="email"
                text="E-mail"
                name="email"
                placeholder="Digite o seu e-mail"
                handleOnchange={handleChange}
                value={cursilhista.email || ""}
            />
            <div className={styles.form_container_plus}>
                <InputCustomMask
                    type="tel"
                    text="Telefone"
                    name="phoneNumber"
                    placeholder="XX-XXXXX-XXXX"
                    mask={'99-99999-9999'}
                    handleOnchange={handleChange}
                    value={cursilhista.phoneNumber || ""}
                />
                <Input
                    type="date"
                    text="Data de Nascimento"
                    name="birthDate"
                    required={'required'}
                    handleOnchange={handleChange}
                    value={cursilhista.birthDate || ""}
                />
            </div>
        </div>
    )
}

export default UserForm