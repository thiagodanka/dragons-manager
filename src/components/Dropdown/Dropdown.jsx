import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = ({ isOpen, menu, children }) => {
    const dropdownRef = useRef(null);


    return (
        <div className={styles.dropdownContainer} ref={dropdownRef}>
            {/* Botão com a imagem do usuário */}
            {children}
            {/* Dropdown menu */}
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    {/* Seção de informações do usuário */}
                    {menu}
                </div>
            )}
        </div>
    );
};

export default Dropdown;