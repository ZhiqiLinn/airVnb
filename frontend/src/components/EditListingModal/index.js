import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditListing from './EditListing';

function EditListingModal({currentListing}) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button className="btn" onClick={() => setShowModal(true)}>Edit Listing</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditListing currentListing={currentListing} hideForm={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default EditListingModal