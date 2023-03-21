import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import SubmitButton from '../form/SubmitButton';
import StepForm from '../hooks/StepForm';
import AddressForm from './AddressForm';
import styles from './CursilhistaForm.module.css';
import SocialForm from './SocialForm';
import Steps from './Steps';
import TransportForm from './TransportForm';
import UserForm from './UserForm';

function CursilhistaForm({ handleSubmit, btnText, cursilhistaData }) {

    const [cursilhista, setCursilhista] = useState(cursilhistaData || [])

    const updateFieldHandler = (key, value) => {
        setCursilhista((prev) => {
            return { ...prev, [key]: value }
        })
    }

    function handleChange(e) {
        return setCursilhista({ ...cursilhista, [e.target.name]: e.target.value })
    }

    const formComponents = [
        <UserForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />,
        <AddressForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />,
        <SocialForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />,
        <TransportForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />
    ]


    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = StepForm(formComponents)


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(cursilhista)
    }

    return (
        <div className={styles.form_container}>
            <Steps currentStep={currentStep} />
            <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                <div>{currentComponent}</div>
                <div className={styles.actions}>
                    {!isFirstStep && (
                        <button className={styles.btn} type="button" onClick={() => changeStep(currentStep - 1)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                    )}
                    {!isLastStep ? (
                        <button className={styles.btn} type="submit">
                            <span>Avançar</span>
                            <GrFormNext />
                        </button>
                    ) : (
                        <SubmitButton text={btnText} />
                    )}
                </div>
            </form>
        </div >
    )
}

export default CursilhistaForm