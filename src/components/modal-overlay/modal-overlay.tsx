import React from "react";
import styles from "./modal-overlay.module.css"

interface ModalOverlayProps {
    children: React.ReactNode
}

function ModalOverlay({ children }: ModalOverlayProps) {
    return (
        <div className={styles['modal-overlay']}>
            {children}
        </div>
    )
}

export default ModalOverlay;