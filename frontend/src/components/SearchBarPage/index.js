import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SearchBar from './SearchBar';
import "./SearchBar"
function SearchBarModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="search-btn btn-hov" onClick={() => setShowModal(true)}>Search</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SearchBar hideForm={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default SearchBarModal;