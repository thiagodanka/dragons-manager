import { GenericForm } from '@components/GenericForm/GenericForm';
import AppLayout from '@layout/AppLayout/AppLayout';

function CreateDragon() {
    return (
        <AppLayout pageTitle="Criação de Dragão">
            <GenericForm mode="create" />
        </AppLayout>
    )
}
export default CreateDragon;