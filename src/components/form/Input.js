import styles from './Input.module.css';

function Input({ type, text, name, placeholder, handleOnchange, value, onBlur, required}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>
                {text}:
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnchange}
                value={value}
                onBlur={onBlur}
                required={required}

            />
        </div>
    )

}

export default Input