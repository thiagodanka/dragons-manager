import Button from '@components/Button/Button';
import styles from './List.module.scss';
import { useState } from 'react';
import { FaPenToSquare, FaRegTrashCan, FaFileLines } from "react-icons/fa6";
import Egg from '@assets/images/egg.png';
import { formatDate } from '@utils/formatDate';
import { useNavigate } from 'react-router-dom';
import LoadingOverlay from '@components/LoadingOverlay/LoadingOverlay';

const List = ({ dragons, onDelete }) => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleUpdate = (dragonId) => {
        navigate(`/dragons/update/${dragonId}`);
    };

    const handleDetails = (dragonId) => {
        navigate(`/dragons/details/${dragonId}`);
    };

    const getImageSource = (imageUrl) => {
        // Se não houver imageUrl ou for string vazia, retorna a imagem padrão
        if (!imageUrl || imageUrl.trim() === "") {
            return Egg;
        }

        // Verifica se é uma URL válida ou caminho local
        try {
            new URL(imageUrl);
            return imageUrl;
        } catch (e) {
            // Se não for URL válida, verifica se começa com / (caminho local)
            if (imageUrl.startsWith('/')) {
                return imageUrl;
            }
            return Egg;
        }
    };

    return (
        <div className={styles.container} >
            {dragons.map((dragon) => (
                <div key={dragon.id} className={styles.item}>
                    <img
                        src={getImageSource(dragon.imageUrl)}
                        alt={`Imagem de ${dragon.name}`}
                        onError={(e) => {
                            e.target.src = Egg;
                        }}
                    />
                    <div>
                        <h5>Nome</h5>
                        <p>{dragon.name}</p>
                    </div>
                    <div>
                        <h5>Tipo</h5>
                        <p>{dragon.type}</p>
                    </div>
                    <div>
                        <h5>Data de criação</h5>
                        <p>{formatDate(dragon.createdAt)}</p>
                    </div>
                    <div className={styles.actions}>
                        <Button
                            loading={loading}
                            disabled={loading}
                            text="Detalhes"
                            fontSize='xs'
                            onClick={() => handleDetails(dragon.id)}
                            variant='neutral'
                            icon={<FaFileLines />}
                        />
                        <Button
                            loading={loading}
                            disabled={loading}
                            text="Alterar"
                            fontSize='xs'
                            onClick={() => handleUpdate(dragon.id)}
                            icon={<FaPenToSquare />}
                        />
                        <Button
                            loading={loading}
                            disabled={loading}
                            text="Excluir"
                            fontSize='xs'
                            onClick={() => onDelete(dragon)}
                            variant='secondary'
                            icon={<FaRegTrashCan />}
                        />
                    </div>
                </div>
            ))}
            <LoadingOverlay isLoading={loading} />
        </div>
    );
};

export default List;