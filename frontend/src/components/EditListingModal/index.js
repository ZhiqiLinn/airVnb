import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditListing from './EditListing';

function EditListingModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Listing</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditListing />
        </Modal>
      )}
    </>
  );
}

export default EditListingModal