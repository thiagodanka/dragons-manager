import { GenericForm } from '@components/GenericForm/GenericForm';
import AppLayout from '@layout/AppLayout/AppLayout';

function EditDragon() {
    return (
        <AppLayout pageTitle="Detalhes do Dragão">
            <GenericForm mode="edit" />
        </AppLayout>
    )
}
export default EditDragon;