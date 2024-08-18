import React, { useEffect } from 'react';
import Contact from './Contact';
import Modal from './Modal';

const ContactModal: React.FC<{
    isVisible: boolean,
    close: () => void,
}> = ({ isVisible, close }) => {
    return (
        <Modal
            show={isVisible}
            selector='modal'
            close={close}
            className='animation-forwards animate-slideInLeft padding-x py-14 bg-white min-h-screen lg:w-[60%] w-full fixed left-0 top-0 z-20 translate-x-[-100%] h-full'
            overlay={true}
        >
            <Contact />
        </Modal>
    )
}

export default ContactModal;