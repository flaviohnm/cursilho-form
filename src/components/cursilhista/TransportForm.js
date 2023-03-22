import { useEffect, useState } from 'react';
import Select from '../form/Select';

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
        <div >
            <Select
                name="transport"
                text="Transporte"
                options={transport}
                handleOnchange={(e) => updateFieldHandler("transport", e.target.value)}
                value={cursilhista.transport || ""}
            />
        </div>
    )

}
export default TransportForm