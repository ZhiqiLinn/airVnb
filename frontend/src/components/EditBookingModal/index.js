import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBooking from './EditBooking';

function EditBookingModal({booking}) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button className="login-btn btn-hov" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal className="edit-booking-modal" onClose={() => setShowModal(false)}>
          <EditBooking booking={booking} hideForm={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default EditBookingModal
