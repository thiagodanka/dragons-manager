import { useEffect, useState } from 'react';
import styles from './Search.module.scss';

export const Search = ({ data, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        onSearch(data);
    }, [data, onSearch]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term.length >= 2) {
            const filteredData = data.filter(item =>
                item.name.toLowerCase().includes(term.toLowerCase())
            );
            onSearch(filteredData);
        } else {
            onSearch(data);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Pesquise por nome do dragão..."
                value={searchTerm}
                onChange={handleSearch}
                className={styles.searchInput}
            />
        </div>
    );
};