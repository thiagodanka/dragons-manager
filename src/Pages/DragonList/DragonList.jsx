import AuthService from "@services/AuthService";
import styles from "./DragonList.module.scss";
import AppLayout from "@layout/AppLayout/AppLayout";

const DragonList = () => {
    const token = AuthService.getToken();
    const tokenData = JSON.parse(atob(token));

    return (
        <AppLayout>
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            </div>
        </AppLayout>

    )
};

export default DragonList;