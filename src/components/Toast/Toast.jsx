import { useEffect } from "react";
import styles from "./Toast.module.scss";
import { FiCheckCircle, FiXCircle, FiAlertCircle } from "react-icons/fi";

const icons = {
    success: <FiCheckCircle />,
    error: <FiXCircle />,
    warning: <FiAlertCircle />,
};

const Toast = ({ type = "success", message, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            <div className={styles.icon}>{icons[type]}</div>
            <div className={styles.message}>{message}</div>
            <button className={styles.closeButton} onClick={onClose}>
                <FiXCircle />
            </button>
        </div>
    );
};

export default Toast;
