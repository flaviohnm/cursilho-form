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

    const formComponents = [
        <UserForm cursilhista={cursilhista} handleChange={handleChange} />,
        <AddressForm cursilhista={cursilhista} handleChange={handleChange} />,
        <SocialForm cursilhista={cursilhista} handleChange={handleChange} />,
        <TransportForm cursilhista={cursilhista} handleChange={handleChange} />
    ]


    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = StepForm(formComponents)


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(cursilhista)
    }

    function handleChange(e) {
        updateFieldHandler(e.target.name, e.target.value)
    }

    return (
        <div className={styles.form_container}>
            <Steps currentStep={currentStep} />
            <form onSubmit={submit}>
                <div className={styles.form}>{currentComponent}</div>
                <div className={styles.actions}>
                    {!isFirstStep && (
                        <button className={styles.btn} type="button" onClick={() => changeStep(currentStep - 1)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                    )}
                    {!isLastStep ? (
                        <button className={styles.btn} type="button" onClick={() => changeStep(currentStep + 1)}>
                            <span>Avançar</span>
                            <GrFormNext />
                        </button>
                    ) : (
                        <SubmitButton text={btnText} type="submit" />
                    )}
                </div>
            </form>
        </div >
    )
}

export default CursilhistaForm