import React from "react";
import { useContext } from "react";
import { ThemeContext } from "@contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./SwitchButton.module.scss";

const SwitchButton = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <div className={styles.switchContainer} onClick={toggleTheme}>
            <FaSun size={16} />
            <div
                className={`${styles.switchButton} ${theme === "dark" ? styles.active : ""
                    }`}
            >
                {theme === "light" ? <FaSun size={14} /> : <FaMoon size={14} />}
            </div>
            <FaMoon size={16} />
        </div>
    );
};

export default SwitchButton;
