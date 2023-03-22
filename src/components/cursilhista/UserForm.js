import Input from '../form/Input'

function UserForm({ cursilhista, submit, updateFieldHandler }) {

    return (
        <div>
            <Input
                type="text"
                text="Nome Completo"
                name="fullName"
                placeholder="Digite o nome completo"
                handleOnchange={(e) => updateFieldHandler("fullName", e.target.value)}
                value={cursilhista.fullName || ""}
            />
            <Input
                type="text"
                text="Nome do Crachá"
                name="displayName"
                placeholder="Digite o nome que será usado no crachá"
                handleOnchange={(e) => updateFieldHandler("displayName", e.target.value)}
                value={cursilhista.displayName || ""}
            />
            <Input
                type="text"
                text="CPF"
                name="cpf"
                placeholder="Informe apenas os números do CPF"
                handleOnchange={(e) => updateFieldHandler("cpf", e.target.value)}
                value={cursilhista.cpf || ""}
            />
            <Input
                type="email"
                text="E-mail"
                name="email"
                placeholder="Digite o seu e-mail"
                handleOnchange={(e) => updateFieldHandler("email", e.target.value)}
                value={cursilhista.email || ""}
            />
            <Input
                type="tel"
                text="Telefone"
                name="phoneNumber"
                placeholder="XX-XXXXX-XXXX"
                handleOnchange={(e) => updateFieldHandler("phoneNumber", e.target.value)}
                value={cursilhista.phoneNumber || ""}
            />
            <Input
                type="date"
                text="Data de Aniversário"
                name="birthDate"
                handleOnchange={(e) => updateFieldHandler("birthDate", e.target.value)}
                value={cursilhista.birthDate || ""}
            />
        </div>
    )
}

export default UserForm