import React, { useState } from 'react';
import { ListingModal } from '../../context/ListingModal';
import EditListing from './EditListing';
import "./EditListing.css";

function EditListingModal({currentListing}) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button className="btn-hov btn" onClick={() => setShowModal(true)}>Edit Listing</button>
      {showModal && (
        <ListingModal  onClose={() => setShowModal(false)}>
            <div className='edit-listing-modal-container'>
              <EditListing  currentListing={currentListing} hideForm={() => setShowModal(false)}/>
          </div>
          </ListingModal>
      )}
    </>
  );
}

export default EditListingModal