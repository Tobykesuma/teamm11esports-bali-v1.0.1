import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import '../../style/modal.css'


function Modal (){
    const [modalshow, setModalShow] = useState(false);
    const handleCloseModal = () => setModalShow(false);
    const handleShowModal = () => setModalShow(true)
  return (
    <>
    <Modal show={modalshow} onHide={handleShowModal}>
        <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You reading this text in Moda</Modal.Body>
        
    </Modal>
    </>
  )
}

export default Modal