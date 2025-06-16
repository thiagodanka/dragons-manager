import React from 'react';
import styles from './LoadingOverlay.module.scss';

const LoadingOverlay = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default LoadingOverlay;
