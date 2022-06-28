import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBooking from './DeleteBooking';

function DeleteBookingModal({booking}) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete Booking</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBooking booking={booking} hideForm={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookingModal

