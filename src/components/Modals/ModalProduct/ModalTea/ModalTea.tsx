import React, { FC } from 'react';
import Modal from 'react-modal';
import leaf1 from '../../../../assets/images/bestsellers/modal-tea/leaf1.svg'
import leaf2 from '../../../../assets/images/bestsellers/modal-tea/leaf2.svg'
import leaf3 from '../../../../assets/images/bestsellers/modal-tea/leaf3.svg'
import leaf4 from '../../../../assets/images/bestsellers/modal-tea/leaf4.svg'
import leaf5 from '../../../../assets/images/bestsellers/modal-tea/leaf5.svg'
import { Leaf1, Leaf2, Leaf3, Leaf4, Leaf5 } from './styled';

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

const ModalTea: FC<IModalCoffee> = ({ isOpen, onClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
        >
            <Leaf1>
                <img src={leaf1} alt="leaf1" />
            </Leaf1>

            <Leaf2>
                <img src={leaf2} alt="leaf2" style={{ width: "100px" }} />
            </Leaf2>

            <Leaf3>
                <img src={leaf3} alt="leaf3" style={{ width: "200px" }} />
            </Leaf3>

            <Leaf4>
                <img src={leaf4} alt="leaf4" style={{ width: "150px" }} />
            </Leaf4>

            <Leaf5>
                <img src={leaf5} alt="leaf5" style={{ width: "100px" }} />
            </Leaf5>

            {children}
        </Modal>
    )
}

export default ModalTea;
