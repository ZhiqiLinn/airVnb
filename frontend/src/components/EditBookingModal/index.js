import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBooking from './EditBooking';

function EditBookingModal({booking}) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Booking</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBooking booking={booking} hideForm={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default EditBookingModal

