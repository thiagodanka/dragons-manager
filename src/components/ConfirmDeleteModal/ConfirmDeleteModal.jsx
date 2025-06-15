import React from 'react';
import styles from './ConfirmDeleteModal.module.scss';
import Button from '@components/Button/Button';
import { FaRegTrashCan, FaArrowRight } from 'react-icons/fa6';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, message, loading }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3>Confirmar exclusão</h3>
                <p>{message}</p>
                <div className={styles.actions}>
                    <Button
                        loading={loading}
                        disabled={loading}
                        text="Cancelar"
                        fontSize='sm'
                        onClick={onClose}
                        variant='neutral'
                        icon={<FaArrowRight />}
                    />
                    <Button
                        loading={loading}
                        disabled={loading}
                        text="Excluir"
                        fontSize='sm'
                        onClick={onConfirm}
                        variant='secondary'
                        icon={<FaRegTrashCan />}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
