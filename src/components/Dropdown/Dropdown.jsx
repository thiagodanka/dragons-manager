import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = ({ isOpen, menu, children, closeDropdown }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closeDropdown]);

    return (
        <div className={styles.dropdownContainer} ref={dropdownRef}>
            {children}
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    {menu}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
