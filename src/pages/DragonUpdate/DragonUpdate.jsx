import Button from '@components/Button/Button';
import { GenericForm } from '@components/GenericForm/GenericForm';
import AppLayout from '@layout/AppLayout/AppLayout';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function DragonUpdate() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dragons');
    }

    return (
        <AppLayout pageTitle="Alterar detalhes do Dragão"
            action={
                <Button
                    icon={<FaArrowRight />}
                    text="Voltar"
                    variant="neutral"
                    fontSize="sm"
                    onClick={handleBack}
                />
            }
        >
            <GenericForm mode="update" />
        </AppLayout>
    )
}
export default DragonUpdate;