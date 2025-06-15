import Button from '@components/Button/Button';
import { GenericForm } from '@components/GenericForm/GenericForm';
import AppLayout from '@layout/AppLayout/AppLayout';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function CreateDragon() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dragons');
    }

    return (
        <AppLayout pageTitle="Criação de Dragão"
            action={
                <Button
                    icon={<FaArrowRight />}
                    text="Voltar"
                    variant="primary"
                    fontSize="sm"
                    onClick={handleBack}
                />
            }
        >
            <GenericForm mode="create" />
        </AppLayout>
    )
}
export default CreateDragon;