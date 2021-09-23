import React, { FC } from 'react';
import Modal from 'react-modal';
import bean1 from '../../../../assets/images/bestsellers/modal-coffee/bean1.svg';
import bean2 from '../../../../assets/images/bestsellers/modal-coffee/bean2.svg';
import bean3 from '../../../../assets/images/bestsellers/modal-coffee/bean3.svg';
import { Bean1, Bean2, Bean3 } from './styled'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        marginTop: "2.5%",
        transform: 'translate(-50%, -50%)',
        height: "80%",
        width: "50%",
        borderRadius: '10px',
        zIndex: 99999999,
    },
};

interface IModalCoffee {
    onClose: () => void;
    isOpen: boolean;
}

const ModalCoffee: FC<IModalCoffee> = ({ isOpen, onClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
        >
            <Bean1>
                <img src={bean1} alt="bean1" style={{ width: "200px" }} />
            </Bean1>

            <Bean2>
                <img src={bean2} alt="bean2" style={{ width: "450px" }} />
            </Bean2>

            <Bean3>
                <img src={bean3} alt="bean3" style={{ width: "1000px", height: "300px" }} />
            </Bean3>

            {children}
        </Modal>
    )
}

export default ModalCoffee;
