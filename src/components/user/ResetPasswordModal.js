import React from 'react';
import Button from '../Buttons/Button';
import Modal from 'react-bootstrap/Modal';
import "./ResetPasswordModal.css"

function ResetPasswordModal({showResetPasswordModal, handleCloseResetPasswordModal}) {
  

  return (
    <>
    
      <Modal
        show={showResetPasswordModal}
        onHide={handleCloseResetPasswordModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
         We are going to reset your password so you can create a new one. After clicking Reset Button, you will receive an email with instructions.
        </Modal.Body>
        <Modal.Footer>
            <div className='reset-modal-btns'>
            <Button variant="close-modal-btn" onClick={handleCloseResetPasswordModal}>
            Close
          </Button>
          <Button variant="reset">Reset Password</Button>
            </div>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResetPasswordModal;