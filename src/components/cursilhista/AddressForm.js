import { useState } from 'react';
import Input from '../form/Input';
import Loading from '../layout/Loading';

function AddressForm({ cursilhista, updateFieldHandler }) {

    //const [ceps, setCeps] = useState(null)
    const [removeLoading, setRemoveLoading] = useState(false)

    function preecherForm(data) {
        cursilhista.logradouro = data.logradouro;
        cursilhista.bairro = data.bairro
        cursilhista.cidade =data.localidade;
        cursilhista.uf = data.uf;
    }


    const buscaCEP = (e) => {
        setRemoveLoading('');
        const cep = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        if (cep !== "" && cep.length === 8) {
            setRemoveLoading(false)
            setTimeout(() => {
                fetch(`https://viacep.com.br/ws/${cep}/json`)
                    .then((resp) => resp.json())
                    .then(data => {
                        preecherForm(data);
                    },)
                    .catch((err) => {
                        console.log("Erro: " + err);
                    })
                    .finally(() => setRemoveLoading(false))
            }, 50)
            setRemoveLoading(true)
        }
    }

    return (
        <div>
            {removeLoading && <Loading />}
            <Input
                type="text"
                text="CEP"
                name="cep"
                placeholder="Digite o CEP, apenas números"
                handleOnchange={(e) => updateFieldHandler("cep", e.target.value)}
                onBlur={buscaCEP}
                value={cursilhista.cep || ""}
            />
            <Input
                type="text"
                text="Rua"
                id="logradouro"
                name="logradouro"
                placeholder="Informe o nome da rua"
                handleOnchange={(e) => updateFieldHandler("logradouro", e.target.value)}
                value={cursilhista.logradouro || ""}
            />
            <Input
                type="text"
                text="Número"
                name="numero"
                placeholder="Informe o número"
                handleOnchange={(e) => updateFieldHandler("number", e.target.value)}
                value={cursilhista.number || ""}
            />
            <Input
                type="text"
                text="Complemento"
                name="complemento"
                placeholder="Informe o complemento"
                handleOnchange={(e) => updateFieldHandler("complement", e.target.value)}
                value={cursilhista.complemento || ""}
            />
            <Input
                type="text"
                text="Bairro"
                id="bairro"
                name="bairro"
                placeholder="Informe o nome o Bairro"
                handleOnchange={(e) => updateFieldHandler("bairro", e.target.value)}
                value={cursilhista.bairro || ""}
            />
            <Input
                type="text"
                text="Cidade"
                id="cidade"
                name="cidade"
                placeholder="Informe o nome da cidade"
                handleOnchange={(e) => updateFieldHandler("localidade", e.target.value)}
                value={cursilhista.cidade || ""}
            />
            <Input
                type="text"
                text="Estado"
                id="uf"
                name="uf"
                placeholder="Informe o nome da cidade"
                handleOnchange={(e) => updateFieldHandler("uf", e.target.value)}
                value={cursilhista.uf || ""}
            />
        </div>
    )

}
export default AddressForm