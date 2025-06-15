import React from "react";
import styles from "./SwitchButton.module.scss";

const SwitchButton = () => {

    const toggleTheme = () => {
        // document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    };

    return (
        <button className={styles.button} onClick={toggleTheme}>
            {/* {theme === "light" ? "🌞" : "🌙"} */}
            Mudar tema
        </button>
    );
};

export default SwitchButton;