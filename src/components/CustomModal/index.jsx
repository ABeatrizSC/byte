import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './style.css'

export function CustomModal({ children, onCloseModal, open }) {
    return (
        <Modal open={open} onClose={onCloseModal} center blockScroll closeOnOverlayClick>
            {children}
        </Modal>
    )
}
