import { useEffect, useState } from 'react';
import Select from '../form/Select';
import styles from './CursilhistaForm.module.css';

function TransportForm({ cursilhista, submit, updateFieldHandler }) {

    const [transport, setTransport] = useState([])


    useEffect(() => {
        fetch("http://localhost:3002/transport", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setTransport(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <form className={styles.form}>
            <Select
                name="transport"
                text="Transporte"
                options={transport}
                handleOnchange={(e) => updateFieldHandler("transport", e.target.value)}
                value={cursilhista.transport || ""}
            />
        </form>
    )

}
export default TransportForm