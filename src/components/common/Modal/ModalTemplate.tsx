import React, { FC } from 'react'
import Modal from 'react-modal';
import ModalTitle from "./ModalTitle";
import close from '../../../assets/images/svg/close.svg';
import closeWhite from '../../../assets/images/svg/close-white.svg'
import { ModalCloseIcon, ModalHeader, StyledModal } from './styled'

Modal.setAppElement(`#___gatsby`);

interface CustomModalProps {
    onClose: () => void;
    onSubmit: (e: any) => void;
    isOpen: boolean;
    children: any;
    title?: string;
    type?: string | undefined;
}

const ModalTemplate: FC<CustomModalProps> = ({ title, onClose, onSubmit, isOpen, type, children }) => {
    const customStyles = {
        content: {
            top: '140px',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, 0)',
            height: "70%",
            width: '90%',
            maxWidth: "800px",
            borderRadius: '10px',
            background: type === "clients" ? "linear-gradient(180deg, #45832A 0%, rgba(124, 218, 83, 0.82) 100%)" : "linear-gradient(180deg, #FBA54E 28.65%, rgba(254, 213, 172, 0.83) 100%)",
        },
    };

    return (
        <StyledModal>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={customStyles}
            >
                <ModalHeader>
                    <ModalTitle text={title} />
                    <ModalCloseIcon onClick={onClose}>
                        <img src={type === "clients" || type === "partners" ? closeWhite : close} alt="close" />
                    </ModalCloseIcon>
                </ModalHeader>
                <form onSubmit={onSubmit}>
                    {children}
                </form>
            </Modal>
        </StyledModal>
    )
}

export default ModalTemplate;
