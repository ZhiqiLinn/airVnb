import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReviewModal } from '../../context/ReviewModal';
import { createOneReview } from '../../store/review';
import { useHistory } from "react-router-dom";
import ReactStars from 'react-stars'
import './CreateReview.css'

const CreateReviewModal = ({ currentListing, owner}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [cleanliness, setCleanliness] = useState(0);
  const [communication, setCommunication] = useState(0);
  const [checkIn, setCheckin] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [location, setLocation] = useState(0);
  const [value, setValue] = useState(0);
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const sessionUser = useSelector(state => state.session.user);    


  useEffect(() => {
    let errors = [];
    if(cleanliness <= 0) errors.push("please rate")
    if(communication <= 0) errors.push("please rate")
    if(checkIn <= 0) errors.push("please rate")
    if(accuracy <= 0) errors.push("please rate")
    if(location <= 0) errors.push("please rate")
    if(value <= 0) errors.push("please rate")
    if(!content.length || content.length > 500) errors.push("Content should be between 0 - 500 characters")
    setErrors(errors);

  },[cleanliness, communication, checkIn, accuracy, location, value, content])

  const reset = () => {
    setCleanliness(0);
    setCommunication(0);
    setCheckin(0);
    setAccuracy(0);
    setLocation(0);
    setValue(0);
    setContent('')
  }

//   console.log(cleanliness)
//   console.log(communication)
//   console.log(checkIn)
//   console.log(accuracy)
//   console.log(location)
//   console.log(value)


const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      listingId: currentListing.id,
      cleanliness,
      communication,
      checkIn,
      accuracy,
      location,
      value,
      content,
      userId:sessionUser.id
    }
    console.log(payload)
    // console.log(errors)
    if(!errors.length) {
        await dispatch(createOneReview(payload))
        reset();
        setShowModal(false)
        setHasSubmitted(false);
    }

  }

  const handleClose = () => {
    setShowModal(false);
  }

  //--------RATING CHANGE FUNCTIONS-----------
  const cleanlinessRating = (newRating) => setCleanliness(newRating)
  const communicationRating = (newRating) => setCommunication(newRating)
  const checkInRating = (newRating) => setCheckin(newRating)
  const accuracyRating = (newRating) => setAccuracy(newRating)
  const locationRating = (newRating) => setLocation(newRating)
  const valueRating = (newRating) => setValue(newRating)




  return (
    <>  
        {sessionUser && 
        <>
            <button className="login-btn btn-hov" onClick={() => setShowModal(true)}>
                Review
            </button>
                {showModal  && (
                    <ReviewModal onClose={handleClose}>
                    <form className='review-form'>
                        
                        <br></br>
                        <h3>{currentListing.name}</h3>
                        <hr></hr>
                
                        <br></br>
                        Please rate your exprience in these areas
                        <div className='rating-container'>
                            <label>Cleanliness</label>
                            <ReactStars
                            count={5}
                            half={false}
                            size={30}
                            value={cleanliness}
                            onChange={cleanlinessRating}
                            color2={'#FF5A5F'}
                            />
                        </div>
                        <div className='rating-container'>
                            <label>Communication</label>
                            <ReactStars
                            count={5}
                            half={false}
                            size={30}
                            value={communication}
                            onChange={communicationRating}
                            color2={'#FF5A5F'}
                            />
                        </div>
                        <div className='rating-container'>
                            <label>Checkin</label>
                            <ReactStars
                            count={5}
                            half={false}
                            size={30}
                            value={checkIn}
                            onChange={checkInRating}
                            color2={'#FF5A5F'}
                            />
                        </div>
                        <div className='rating-container'>
                            <label>Accuracy</label>
                            <ReactStars
                            count={5}
                            half={false}
                            size={30}
                            value={accuracy}
                            onChange={accuracyRating}
                            color2={'#FF5A5F'}
                            />
                        </div>
                        <div className='rating-container'>
                            <label>Location</label>
                            <ReactStars
                            count={5}
                            half={false}
                            size={30}
                            value={location}
                            onChange={locationRating}
                            color2={'#FF5A5F'}
                            />
                        </div>
                        <div className='rating-container'>
                            <label>Value</label>
                            <ReactStars
                            count={5}
                            half={false}
                            size={30}
                            value={value}
                            onChange={valueRating}
                            color2={'#FF5A5F'}
                            />
                        </div>
                        <div>
                            <p>{`Please write a public review for ${owner.username}`}</p>
                                <textarea
                                    className="create-review-textarea"
                                    placeholder="Share your thoughts"
                                    type='text'
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                />
                            <div style={{fontSize:"small", textAlign:"end"}}>{`${content.length}/500 characters`}</div>
                        </div>
                        <button
                            className='rating-button rating-button-cancel'
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className={errors ? 'rating-button rating-button-disabled' : 'rating-button rating-button-submit'} type='submit'
                            disabled={errors.length !== 0}
                        >Submit</button>
                    </form>
                    </ReviewModal>
                )}
        </>
    }
    </>
  )
}

export default CreateReviewModal