import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import styles from './CursilhistaForm.module.css';

function AddressForm({cursilhista, submit, updateFieldHandler}) {

    const [cepConsultado, setCepConsultado] = useState([])

    const cep = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        console.log();
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then((resp) => resp.json())
            .then(data => {
                setCepConsultado(data);
                console.log(data);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <form onSubmit={(e) => cep} className={styles.form}>
            <Input
                type="text"
                text="CEP"
                name="cep"
                placeholder="Digite o CEP, apenas números"
                maxlength="8"
                minlength="8"
                required
                handleOnchange={(e) => updateFieldHandler("cep", e.target.value)}
                value={cursilhista.cep || ""}
            />
            <Input
                type="text"
                text="Rua"
                name="street"
                placeholder="Informe o nome da rua"
                handleOnchange={(e) => updateFieldHandler("street", e.target.value)}
                value={cursilhista.street || ""}
            />
            <Input
                type="text"
                text="Número"
                name="number"
                placeholder="Informe o número"
                handleOnchange={(e) => updateFieldHandler("number", e.target.value)}
                value={cursilhista.number || ""}
            />
            <Input
                type="text"
                text="Complemento"
                name="complement"
                placeholder="Informe o complemento"
                handleOnchange={(e) => updateFieldHandler("complement", e.target.value)}
                value={cursilhista.complement || ""}
            />
            <Input
                type="text"
                text="Bairro"
                name=""
                placeholder="Informe o nome o Bairro"
                handleOnchange={(e) => updateFieldHandler("neighborhood", e.target.value)}
                value={cursilhista.neighborhood || ""}
            />
            <Input
                type="text"
                text="Cidade"
                name="city"
                placeholder="Informe o nome da cidade"
                handleOnchange={(e) => updateFieldHandler("city", e.target.value)}
                value={cursilhista.city || ""}
            />
        </form>
    )

}
export default AddressForm