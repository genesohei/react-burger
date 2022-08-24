import React, { useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalHeader from "../modal-header/modal-header";
import styles from "./modal.module.css"
import { ModalContext } from "../../contexts/modalContext";
import { IModalContext } from "../../utils/interfaces";

const modalRoot = document.querySelector('#react-modals')!;

function Modal() {
    const { modal, hideModal } = useContext(ModalContext) as IModalContext;

    const onClose = () => {
        hideModal();
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
                <ModalHeader title={modal.props ? modal.props.title : ''}>
                    <div className={styles['modal-close']} onClick={onClose}><CloseIcon type="primary"/></div>
                </ModalHeader>
                <div className={styles['modal-content']}>
                    {modal.component}
                </div>
            </div>
        </>,
        modalRoot
    )
}

export default Modal;