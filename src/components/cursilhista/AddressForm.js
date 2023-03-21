import { useState } from 'react';
import Input from '../form/Input';
import Message from '../layout/Message';
import styles from './CursilhistaForm.module.css';

function AddressForm({ cursilhista, submit, updateFieldHandler }) {

    const [cepConsultado, setCepConsultado] = useState([])
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    const checkCEP = (e) => {
        setMessage('')
        const cep = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then((resp) => resp.json())
            .then(data => {
                setCepConsultado(data);
                cursilhista.logradouro = cepConsultado.logradouro
                cursilhista.bairro = cepConsultado.bairro
                cursilhista.localidade = cepConsultado.localidade
                cursilhista.uf = cepConsultado.uf
                setMessage('CEP Encontrado!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }

    return (
        <form className={styles.form}>
            {message && <Message type={type} msg={message} />}
            <Input
                type="text"
                text="CEP"
                name="cep"
                placeholder="Digite o CEP, apenas números"
                handleOnchange={(e) => updateFieldHandler("cep", e.target.value)}
                onBlur={checkCEP}
                value={cursilhista.cep || ""}
            />
            <Input
                type="text"
                text="Rua"
                name="logradouro"
                placeholder="Informe o nome da rua"
                handleOnchange={(e) => updateFieldHandler("logradouro", e.target.value)}
                value={cursilhista.logradouro || ""}
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
                name="bairro"
                placeholder="Informe o nome o Bairro"
                handleOnchange={(e) => updateFieldHandler("bairro", e.target.value)}
                value={cursilhista.bairro || ""}
            />
            <Input
                type="text"
                text="Cidade"
                name="localidade"
                placeholder="Informe o nome da cidade"
                handleOnchange={(e) => updateFieldHandler("localidade", e.target.value)}
                value={cursilhista.localidade || ""}
            />
            <Input
                type="text"
                text="Estado"
                name="uf"
                placeholder="Informe o nome da cidade"
                handleOnchange={(e) => updateFieldHandler("uf", e.target.value)}
                value={cursilhista.uf || ""}
            />
        </form>
    )

}
export default AddressForm