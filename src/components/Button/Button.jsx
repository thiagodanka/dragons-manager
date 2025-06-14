import styles from "./Button.module.scss";

const Button = ({ text, type, loading, loadingText, disabled = false }) => {
    return (
        <button
            type={type}
            className={styles.button}
            disabled={disabled}
        >
            {loading ? loadingText : text}
        </button>
    );
}
export default Button;