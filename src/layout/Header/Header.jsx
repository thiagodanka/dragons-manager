import { useContext, useState } from "react";
import Dropdown from "@components/Dropdown/Dropdown";
import styles from "./Header.module.scss";
import AuthService from "@services/AuthService";
import { AuthContext } from "@contexts/AuthContext";
import SwitchButton from "@components/SwitchButton/SwitchButton";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { logout } = useContext(AuthContext);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const token = AuthService.getToken();
    const tokenData = JSON.parse(atob(token));

    const menu = (
        <>
            <div className={styles.userInfo}>                <img
                src={tokenData.image}
                alt={`Avatar de ${tokenData.userName}`}
                className={styles.avatarLarge}
            />
                <div className={styles.userDetails}>
                    <p className={styles.userName}>{tokenData.userName}</p>
                    <p className={styles.userEmail}>{tokenData.email}</p>
                </div>
            </div>

            <div className={styles.divider}></div>

            <button
                className={styles.logoutButton}
                onClick={() => {
                    logout();
                    handleOpen();
                }}
            >
                Sair
            </button>
        </>
    )
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Dragons Manager</h1>
            <div className={styles.actions}>
                <SwitchButton />
                <Dropdown
                    isOpen={isOpen}
                    menu={menu}
                >
                    <button
                        className={styles.avatarButton}
                        onClick={handleOpen}
                        aria-label="Menu do usuário"
                    >
                        <img
                            src={tokenData.image}
                            alt={`Avatar de ${tokenData.userName}`}
                            className={styles.avatarImage}
                        />
                    </button>
                </Dropdown>
            </div>
        </header>
    );
}
export default Header;