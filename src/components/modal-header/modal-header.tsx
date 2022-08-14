import React from 'react';
import styles from './modal-header.module.css';

interface ModalHeaderProps {
    title: string
    children: React.ReactNode
}

function ModalHeader({ title = '', children }: ModalHeaderProps) {
    return (
        <div className={`${styles['modal-header']} text text_type_main-large mb-5`}>
            {
                title &&
                <div className={styles['modal-title']}>{title}</div>
            }
            {children}
        </div>
    )
}

export default ModalHeader;