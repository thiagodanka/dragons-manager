import DragonService from '@services/DragonService';
import styles from './GenericForm.module.scss';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import { currentDate, formatDate } from '@utils/formatDate';
import dragons from '@utils/dragons.json';
import { useToast } from '@contexts/ToastContext';

export const GenericForm = ({ mode = 'create' }) => {

    const { addToast } = useToast();
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        createdAt: currentDate(),
    });

    useEffect(() => {
        if (mode === 'edit' && id) {
            setLoading(true);
            DragonService.getById(id)
                .then(response => {
                    setFormData(response.data);
                })
                .finally(() => setLoading(false));
        } else if (mode === 'create') {
            setFormData({
                name: '',
                type: '',
                createdAt: currentDate(),
            });
        }
    }, [mode, id]);


    const getRandomDragonImage = () => {
        const images = dragons.dragons;
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let dataToSend = { ...formData };
            if (mode === 'create') {
                dataToSend.imageUrl = getRandomDragonImage();
                await DragonService.create(dataToSend);
                addToast("success", `Dragão ${dataToSend.name} criado com sucesso.`);
            } else {
                await DragonService.update(id, formData);
                addToast("success", `Dragão ${formData.name} alterado com sucesso.`);
            }
            navigate('/dragons');
        } catch (error) {
            if (mode === 'create') {
                addToast("error", `Erro ao criar dragão ${formData.name}.`);
            } else {
                addToast("error", `Erro ao editar dragão ${formData.name}.`);
            }
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${styles.formContainer} ${styles[mode]}`}>
            <h2>{mode === 'create' ? 'Cadastrar Novo Dragão' : 'Editar Dragão'}</h2>

            <form onSubmit={handleSubmit} className={styles.dragonForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nome:</label>
                    <Input
                        identifier="name"
                        value={formData.name}
                        autoComplete="off"
                        disabled={loading}
                        required
                        onChange={handleChange}
                        type="text"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="type">Tipo:</label>
                    <Input
                        identifier="type"
                        value={formData.type}
                        autoComplete="off"
                        disabled={loading}
                        required
                        onChange={handleChange}
                        type="text"
                    />
                </div>

                {mode === 'edit' && (
                    <div className={styles.formGroup}>
                        <label>Data de Criação:</label>
                        <Input
                            identifier="type"
                            value={formatDate(formData.createdAt)}
                            autoComplete="off"
                            disabled={true}
                            type="text"
                        />
                    </div>
                )}

                <div className={styles.formActions}>
                    <Button
                        type="button"
                        disabled={loading}
                        onClick={() => navigate('/dragons')}
                        text={"Cancelar"}
                        variant="neutral"
                        fontSize="sm"
                    />

                    <Button
                        type="submit"
                        disabled={loading}
                        text={mode == "create" ? "Cadastrar" : "Salvar"}
                        loading={loading}
                        loadingText="Salvando..."
                        fontSize="sm"
                    />

                </div>
            </form>
        </div>
    );
};