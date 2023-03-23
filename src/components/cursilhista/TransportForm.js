import { useEffect, useState } from 'react';
import Select from '../form/Select';

function TransportForm({ cursilhista, handleChange }) {

    const [transportes, setTransportes] = useState([])
    const [igrejas, setIgrejas] = useState([])


    useEffect(() => {
        fetch("http://localhost:3002/transportes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setTransportes(data)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3002/igrejas", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setIgrejas(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div >
            <Select
                text="Sobre o transporte"
                name="transporte"
                options={transportes}
                handleOnchange={handleChange}
                value={cursilhista.transporte || ""}
            />
            {(cursilhista.transporte === '1') && (
                <Select
                    text="De onde você irá sair"
                    name="igreja"
                    options={igrejas}
                    handleOnchange={handleChange}
                    value={cursilhista.igreja || ""}
                />
            )}
        </div>
    )

}
export default TransportForm