import List from "@components/List/List";
import AppLayout from "@layout/AppLayout/AppLayout";
import DragonService from "@services/DragonService";
import { useEffect, useState } from "react";
import ConfirmDeleteModal from "@components/ConfirmDeleteModal/ConfirmDeleteModal";
import { useToast } from "@contexts/ToastContext";
import Button from "@components/Button/Button";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Search } from "@components/Search/Search";
import styles from "./DragonList.module.scss";
import LoadingOverlay from "@components/LoadingOverlay/LoadingOverlay";

const DragonList = () => {
    const [dragons, setDragons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDragon, setSelectedDragon] = useState(null);
    const [filteredDragons, setFilteredDragons] = useState(dragons);

    const { addToast } = useToast();

    const navigate = useNavigate();

    const handleCreateDragon = () => {
        navigate('/dragons/create');
    }

    const fetchDragons = async () => {
        try {
            const response = await DragonService.getAll();
            const sorted = response.data.sort((a, b) => a.name.localeCompare(b.name));
            setDragons(sorted);
        } catch (error) {
            console.error("Erro ao buscar dragões:", error);
        } finally {
            setLoading(false);
        }
    };
    // addToast("success", `Dragão nome do dragão excluído com sucesso.`);
    const handleDeleteRequest = (dragon) => {
        setSelectedDragon(dragon);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedDragon) return;

        DragonService.delete(selectedDragon.id)
            .then(() => {
                console.log(`Dragão ${selectedDragon.name} excluído.`);
                setDragons((prev) => prev.filter((d) => d.id !== selectedDragon.id));
                addToast("success", `Dragão "${selectedDragon.name}" excluído com sucesso.`);
            })
            .catch((error) => {
                console.error(`Erro ao excluir ${selectedDragon.name}:`, error);
            })
            .finally(() => {
                setIsModalOpen(false);
                setSelectedDragon(null);
            });
    };

    useEffect(() => {
        fetchDragons();
    }, []);

    return (
        <AppLayout
            pageTitle="Lista de Dragões"
            action={
                <div className={styles.action}>
                    <Search
                        data={dragons}
                        onSearch={setFilteredDragons}
                    />
                    <Button
                        icon={<FaPlus />}
                        text="Criar Dragão"
                        variant="primary"
                        fontSize="sm"
                        onClick={handleCreateDragon}
                    />
                </div>
            }
        >
            <List dragons={filteredDragons} onDelete={handleDeleteRequest} />
            <ConfirmDeleteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmDelete}
                message={`Deseja realmente excluir "${selectedDragon?.name}"?`}
            />
            <LoadingOverlay isLoading={loading} />
        </AppLayout>
    );
};

export default DragonList;
