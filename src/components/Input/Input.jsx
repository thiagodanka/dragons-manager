import styles from "./Input.module.scss";

const Input = ({
    value,
    disabled = false,
    type = "text",
    identifier,
    autoComplete = "off",
    ...rest
}) => {

    return (
        <input
            type={type}
            id={identifier}
            name={identifier}
            autoComplete={autoComplete}
            value={value}
            onChange={e => setUsername(e.target.value)}
            disabled={disabled}
            className={styles.input}
            {...rest}
        />
    );
};

export default Input;