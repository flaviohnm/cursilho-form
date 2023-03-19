import { MdContactEmergency } from 'react-icons/md'
import { RiCarFill, RiMapPinFill, RiTeamFill, RiUserFill } from 'react-icons/ri'
import './Steps.css'

function Steps({ currentStep }) {

    return (
        <div className="steps">
            <div className="step active">
                <RiUserFill />
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <RiMapPinFill />
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <RiTeamFill />
            </div>
            <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
                <MdContactEmergency />
            </div>
            <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
                <RiCarFill />
            </div>
        </div>
    )

}

export default Steps