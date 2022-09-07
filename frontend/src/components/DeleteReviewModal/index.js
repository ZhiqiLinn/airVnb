import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { deleteOneReview } from "../../store/review";
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function DeleteReviewModal({currentReview, currentListing}) {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user)

  const handleDelete = async () => {
      await dispatch(deleteOneReview(currentReview))
      setShowModal(false)
  }

  const handleCancel = (e) => {
      e.preventDefault();
      setShowModal(false)
  };
  return (
    <>
    {sessionUser && currentReview.userId === sessionUser.id && (
        <>
            <button className="btn-hov login-btn" style={{marginLeft:"5px"}} onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="delete-listing-container">
                        <h2>Do you really want to delete your Review? This action cannot be undone but you can leave another review.</h2>
                        <div className='delete-listing-btns-div'>
                            <button className="delete-listing-btn" type="button" onClick={handleDelete}>
                                Delete
                            </button>
                            <button className="delete-listing-btn" type='button' onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )}
    </>
  );
}

export default DeleteReviewModal