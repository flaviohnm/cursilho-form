import { useState } from 'react';
import styles from '../cursilhista/CursilhistaForm.module.css';
import Input from '../form/Input';
import InputCustomMask from '../form/InputCustomMask';
import Loading from '../layout/Loading';
import Message from '../layout/Message';


function AddressForm({ cursilhista, handleChange }) {

    const [removeLoading, setRemoveLoading] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    function preecherForm(data) {
        cursilhista.logradouro = data.logradouro;
        cursilhista.bairro = data.bairro
        cursilhista.cidade = data.localidade;
        cursilhista.uf = data.uf;
        cursilhista.numero = '';
        cursilhista.complemento = '';
    }

    function limparForm(e) {
        cursilhista.cep = ''
        cursilhista.logradouro = ''
        cursilhista.bairro = ''
        cursilhista.cidade = ''
        cursilhista.uf = ''
        cursilhista.numero = ''
        cursilhista.complemento = ''
    }

    const buscaCEP = (e) => {
        setRemoveLoading('');
        setMessage('');
        const cep = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        if (cep.length === 8) {
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
                setRemoveLoading(true)
            }, 100)
        } else if (cep.length !== 8) {
            setMessage('CEP incompleto, tente novamente!');
            setType('error');
            limparForm();
        }else {
            setMessage('CEP não encontrado');
            setType('error');
            limparForm();
        }
    }

    return (
        <div>
            {removeLoading && <Loading />}
            {message && <Message type={type} msg={message} />}
            <InputCustomMask
                type="text"
                text="CEP"
                name="cep"
                mask={'99999-999'}
                placeholder="Digite o CEP, apenas números"
                handleOnchange={handleChange}
                onBlur={buscaCEP}
                value={cursilhista.cep || ""}
            />
            <Input
                type="text"
                text="Rua"
                id="logradouro"
                name="logradouro"
                placeholder="Avenida, rua, quadra..."
                handleOnchange={handleChange}
                value={cursilhista.logradouro || ""}
            />
            <div className={styles.form_container_plus}>
                <Input
                    type="text"
                    text="Número"
                    name="numero"
                    placeholder="Informe o número"
                    handleOnchange={handleChange}
                    value={cursilhista.numero || ""}
                />
                <Input
                    type="text"
                    text="Complemento"
                    name="complemento"
                    placeholder="Apartamento..."
                    handleOnchange={handleChange}
                    value={cursilhista.complemento || ""}
                />
            </div>
            <Input
                type="text"
                text="Bairro"
                id="bairro"
                name="bairro"
                placeholder="Nome do bairro"
                handleOnchange={handleChange}
                value={cursilhista.bairro || ""}
            />
            <div className={styles.form_container_plus}>
                <div className={styles.cidade}>
                    <Input
                        type="text"
                        text="Cidade"
                        id="cidade"
                        name="cidade"
                        placeholder="Nome da cidade"
                        handleOnchange={handleChange}
                        value={cursilhista.cidade || ""}
                    />
                </div>
                <div className={styles.estado}>
                    <InputCustomMask
                        type="text"
                        text="Estado"
                        id="uf"
                        name="uf"
                        placeholder="uf"
                        handleOnchange={handleChange}
                        value={cursilhista.uf || ""}
                    />
                </div>
            </div>
        </div>
    )

}
export default AddressForm