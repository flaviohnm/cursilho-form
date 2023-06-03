import InputMask from 'react-input-mask';
import styles from './Input.module.css';

function InputCep({ type, text, name, placeholder, handleOnchange, value, onBlur, mask }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>
                {text}:
            </label>
            <InputMask
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnchange}
                value={value}
                onBlur={onBlur}
                mask={mask}
            />
        </div>
    )

}

export default InputCep