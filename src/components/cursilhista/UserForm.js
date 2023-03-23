import styles from '../cursilhista/CursilhistaForm.module.css'
import Input from '../form/Input'

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
            <Input
                type="text"
                text="CPF"
                name="cpf"
                placeholder="Informe apenas os números do CPF"
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
                <Input
                    type="tel"
                    text="Telefone"
                    name="phoneNumber"
                    placeholder="XX-XXXXX-XXXX"
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