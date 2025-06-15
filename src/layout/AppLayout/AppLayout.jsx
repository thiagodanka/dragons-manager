import Header from "@layout/Header/Header";
import styles from "./AppLayout.module.scss";
import { useEffect } from "react";

const AppLayout = ({ children, pageTitle, action }) => {

    useEffect(() => {
        if (pageTitle) {
            document.title = `${pageTitle} | Dragons Manager`;
        }
    }, [pageTitle]);

    return (
        <div className={styles.appLayout}>
            <Header />
            <main className={styles.main}>
                <div className={styles.actions}>
                    {action}
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
}

AppLayout.defaultProps = {
    pageTitle: 'Dragons Manager'
};

export default AppLayout;