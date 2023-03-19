import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import styles from './CursilhistaForm.module.css';

function AddressForm() {

    const [estadoCivil, setEstadoCivil] = useState([])
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
        <form onSubmit={(e) => cep} className={styles.form}>
            <Input
                type="text"
                text="CEP"
                name="cep"
                placeholder="Digite o CEP, apenas números"
                maxlength="8"
                minlength="8"
                required
            />
            <Input
                type="text"
                text="Rua"
                name="address"
                placeholder="Informe o nome da rua"
                value={cepConsultado.logradouro}
                disable required data-input
            />
            <Input
                type="text"
                text="Número"
                name="address"
                placeholder="Informe o número"
                disable required data-input
            />
            <Input
                type="text"
                text="Complemento"
                name="complement"
                placeholder="Informe o complemento"
                disable required data-input
            />
            <Input
                type="text"
                text="Bairro"
                name="neighborhood"
                placeholder="Informe o nome o Bairro"
                disable required data-input
            />
            <Input
                type="text"
                text="Cidade"
                name="city"
                placeholder="Informe o nome da cidade"
                disable required data-input
            />
            <Select
                name="estadocivil_id"
                text="Estado Civil"
                options={estadoCivil}
            />
        </form>
    )

}
export default AddressForm