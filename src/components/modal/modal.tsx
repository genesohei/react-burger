import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalHeader from "../modal-header/modal-header";
import styles from "./modal.module.css"

const modalRoot = document.querySelector('#react-modals')!;

interface ModalProps {
    children: React.ReactNode
    title: string
    setModal: Function
}

function Modal({ children, title, setModal }: ModalProps) {
    const onClose = () => {
        setModal({
            isVisible: false,
            title: '',
            content: null,
        });
    }

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, []);

    return createPortal(
        <>
            <ModalOverlay onClose={onClose}/>
            <div className={styles.modal}>
                <ModalHeader title={title}>
                    <div className={styles['modal-close']} onClick={onClose}><CloseIcon type="primary"/></div>
                </ModalHeader>
                <div className={styles['modal-content']}>
                    {children}
                </div>
            </div>
        </>,
        modalRoot
    )
}

export default Modal;