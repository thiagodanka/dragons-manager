import Header from "@components/Header/Header";
import styles from "./AppLayout.module.scss";

const AppLayout = ({ children }) => {
    return (
        <div className={styles.appLayout}>
            <Header />
            <main className={styles.main}>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2023 My Application</p>
            </footer>
        </div>
    );
}

export default AppLayout;