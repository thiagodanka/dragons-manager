import List from "@components/List/List";
import AppLayout from "@layout/AppLayout/AppLayout";
import DragonService from "@services/DragonService";
import { useEffect, useState } from "react";

const DragonList = () => {

    const [dragons, setDragons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

        fetchDragons();
    }, []);
    return (
        <AppLayout>
            {
                loading ?
                    <div>Carregando...</div>
                    :
                    <List dragons={dragons} />

            }
        </AppLayout>

    )
};

export default DragonList;