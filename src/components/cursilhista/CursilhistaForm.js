import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import SubmitButton from '../form/SubmitButton';
import StepForm from '../hooks/StepForm';
import AddressForm from './AddressForm';
import styles from './CursilhistaForm.module.css';
import EmergencyForm from './EmergencyForm';
import SocialForm from './SocialForm';
import Steps from './Steps';
import TransportForm from './TransportForm';
import UserForm from './UserForm';

function ProjectForm({ handleSubmit, btnText, cursilhistaData }) {

    const [cursilhista, setCursilhista] = useState(cursilhistaData || [])

    const updateFieldHandler = (key, value) => {
        setCursilhista((prev) => {
            return { ...prev, [key]: value }
        })
    }

    const formComponents = [
        <UserForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />,
        <AddressForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />,
        <SocialForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />,
        <EmergencyForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />,
        <TransportForm cursilhista={cursilhista} updateFieldHandler={updateFieldHandler} />
    ]


    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = StepForm(formComponents)


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(cursilhista)
    }

    function handleChange(e) {
        setCursilhista({ ...cursilhista, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.form_container}>
            <Steps currentStep={currentStep} />
            <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                <div>{currentComponent}</div>
                <div className={styles.actions}>
                    {!isFirstStep && (
                        <button type="button" onClick={() => changeStep(currentStep - 1)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                    )}
                    {!isLastStep ? (
                        <button type="submit">
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

export default ProjectForm