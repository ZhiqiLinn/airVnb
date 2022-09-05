import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBooking from './DeleteBooking';

function DeleteBookingModal({booking}) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button className="login-btn btn-hov" onClick={() => setShowModal(true)}>Delete </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBooking booking={booking} hideForm={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookingModal

