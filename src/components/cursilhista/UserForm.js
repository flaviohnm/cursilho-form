import styles from '../cursilhista/CursilhistaForm.module.css';
import Input from '../form/Input';
import InputCustomMask from '../form/InputCustomMask';

function UserForm({ cursilhista, handleChange }) {

    return (
        <div>
            <Input
                type="text"
                text="Nome Completo"
                name="fullName"
                placeholder="Digite o nome completo"
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
                handleOnchange={handleChange}
                value={cursilhista.cpf || ""}
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
                    handleOnchange={handleChange}
                    value={cursilhista.birthDate || ""}
                />
            </div>
        </div>
    )
}

export default UserForm