import styles from './SubmitButton.module.css';

function SubmitButton({ text, type }) {
    return (
        <div>
            <button className={styles.btn} type={type}>
                {text}
            </button>
        </div>
    )

}

export default SubmitButton