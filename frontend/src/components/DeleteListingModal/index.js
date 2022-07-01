import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteListing from './DeleteListing';

function DeleteListingModal({currentListing}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btn-hov btn" onClick={() => setShowModal(true)}>Delete Listing</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteListing setShowModal={setShowModal} currentListing={currentListing}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteListingModal