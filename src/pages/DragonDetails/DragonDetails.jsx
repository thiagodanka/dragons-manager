import Button from '@components/Button/Button';
import { GenericForm } from '@components/GenericForm/GenericForm';
import AppLayout from '@layout/AppLayout/AppLayout';
import { FaArrowLeft, FaPenToSquare } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import styles from './DragonDetails.module.scss';
import { useParams } from 'react-router-dom';

function DragonDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dragons');
    }

    const handleUpdate = () => {
        navigate(`/dragons/update/${id}`);
    };

    return (
        <AppLayout pageTitle="Detalhes do Dragão"
            action={
                <div className={styles.actions}>
                    <Button
                        icon={<FaArrowLeft />}
                        text="Voltar"
                        variant="neutral"
                        fontSize="sm"
                        onClick={handleBack}
                    />
                    <Button
                        icon={<FaPenToSquare />}
                        text="Alterar"
                        variant="primary"
                        fontSize="sm"
                        onClick={handleUpdate}
                    />
                </div>
            }
        >
            <GenericForm mode="details" />
        </AppLayout>
    )
}
export default DragonDetails;