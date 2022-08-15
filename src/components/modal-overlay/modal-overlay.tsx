import React from "react";
import styles from "./modal-overlay.module.css"

interface ModalOverlayProps {
    onClose: () => void;
}

function ModalOverlay({ onClose }: ModalOverlayProps) {
    return (
        <div className={styles['modal-overlay']} onClick={onClose}/>
    )
}

export default ModalOverlay;