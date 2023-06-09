import { cpf } from 'cpf-cnpj-validator';
import { useState } from 'react';
import styles from '../cursilhista/CursilhistaForm.module.css';
import Input from '../form/Input';
import InputCustomMask from '../form/InputCustomMask';
import Message from '../layout/Message';

function UserForm({ cursilhista, handleChange }) {

    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [currenteCPF, setCurrentCPF] = useState('')

    function limpaCPF() {
        cursilhista.cpf = ''
    }
    function limpaEmail() {
        cursilhista.email = ''
    }
    function limpaFullName() {
        cursilhista.fullName = ''
    }
    function limpaDisplayName() {
        cursilhista.displayName = ''
    }
    function limpaPhoneNumber() {
        cursilhista.phoneNumber = ''
    }



    function validaCPF(cpfValue) {
        if (cpf.isValid(cpfValue)) {
            setCurrentCPF(cpfValue)
        }
        else {
            setMessage('CPF Inválido');
            setType('error');
            limpaCPF();
        }
    }

    const handleCPF = (e) => {
        setMessage('');
        setType('');
        var newCPF = cpf.strip(e.target.value)
        if (currenteCPF !== newCPF) {
            if (newCPF.length === 11) {
                validaCPF(newCPF)
            } else {
                setMessage('CPF incompleto');
                setType('error');
                limpaCPF();
            }
        }
    }

    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleEmail = (e) => {
        setMessage('');
        setType('');
        var newEmail = e.target.value
        if (newEmail === '') {
            setMessage('Email precisa ser preenchido');
            setType('error');
            limpaEmail();
        } else {
            if (validarEmail(newEmail)) {
                setMessage('');
                setType('');
            } else {
                setMessage('Email com formato invalido');
                setType('error');
                limpaEmail();
            }
        }
    }

    function validaFullName(name) {
        if (name.length < 10) {
            setMessage('Nome Completo precisa ter mais que 10 caracteres');
            setType('error');
            limpaFullName();
        }
    }

    const handleFullName = (e) => {
        setMessage('');
        setType('');
        var newName = e.target.value
        if (newName === '') {
            setMessage('Por favor, preencha o seu nome completo!');
            setType('error');
            limpaFullName();
        } else {
            validaFullName(newName)
        }
    }

    function validaDisplayName(displayName) {
        if (displayName.length < 3) {
            setMessage('Nome Completo precisa ter mais que 3 caracteres');
            setType('error');
            limpaDisplayName();
        }
    }

    const handleDisplayName = (e) => {
        setMessage('');
        setType('');
        var displayName = e.target.value
        if (displayName === '') {
            setMessage('Informe como você quer ser chamado(a)');
            setType('error');
            limpaDisplayName();
        } else {
            validaDisplayName(displayName)
        }
    }

    function validaPhoneNumber(phoneNumber) {
        if (phoneNumber.length < 13) {
            setMessage('O numero de telefone está incompleto');
            setType('error');
            limpaPhoneNumber();
        }
    }

    const handlePhoneNumber = (e) => {
        setMessage('');
        setType('');
        var phone = cpf.strip(e.target.value)
        if (phone === '') {
            setMessage('Por favor informe o número de telefone');
            setType('error');
        } else {
            validaPhoneNumber(phone)
        }
    }



    return (
        <div>
            {message && <Message type={type} msg={message} />}
            <Input
                type="text"
                text="Nome Completo"
                name="fullName"
                placeholder="Digite o nome completo"
                required={true}
                onBlur={handleFullName}
                handleOnchange={handleChange}
                value={cursilhista.fullName || ""}
            />
            <Input
                type="text"
                text="Nome do Crachá"
                name="displayName"
                placeholder="Digite o nome que será usado no crachá"
                onBlur={handleDisplayName}
                handleOnchange={handleChange}
                value={cursilhista.displayName || ""}
            />
            <InputCustomMask
                type="text"
                text="CPF"
                name="cpf"
                mask={'999.999.999-99'}
                placeholder="Digite apenas os números do CPF"
                handleOnchange={handleChange}
                onBlur={handleCPF}
                required={'required'}
                value={cursilhista.cpf}
            />
            <InputCustomMask
                type="email"
                text="E-mail"
                name="email"
                placeholder="Digite o seu e-mail"
                handleOnchange={handleChange}
                onBlur={handleEmail}
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
                    onBlur={handlePhoneNumber}
                    value={cursilhista.phoneNumber || ""}
                />
                <Input
                    type="date"
                    text="Data de Nascimento"
                    name="birthDate"
                    required={true}
                    handleOnchange={handleChange}
                    value={cursilhista.birthDate || ""}
                />
            </div>
        </div>
    )
}
export default UserForm