import styles from "./Button.module.scss";

const Button = ({
    icon,
    text,
    loading,
    fontSize = "md",
    variant = "primary",
    loadingText = "Carregando",
    type = "button",
    disabled = false,
    ...rest
}) => {
    // Mapeia fontSize para classes CSS
    const fontSizeClass = styles[`size-${fontSize}`] || "";

    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]} ${fontSizeClass}`}
            disabled={disabled || loading}
            {...rest}
        >
            {loading ? loadingText : text}
            {icon && <span className={styles.icon}>{icon}</span>}
        </button>
    );
};

export default Button;