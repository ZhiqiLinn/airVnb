import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { editOneBooking, getAllBookings } from "../../store/booking";
import "./EditBooking.css"

const EditBooking = ({booking, hideForm}) => {
    // console.log("THIS IS BOOKIGN:", booking)

    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    // console.log("THIS IS CHECKIN DATE", checkInDate)
    // console.log("THIS IS CHECKIN DATE", checkOutDate)

    useEffect(() => {
        dispatch(getAllBookings());
      }, [dispatch]);

    //   useEffect( () => {
    //     let errors = []
    //     if (!checkIn) errors.push("Check In Date is required");
    //     if (!checkOut) errors.push("Check Out Date is required");
    //     setErrors(errors);
    // }, [checkIn, checkOut]);

    let editedBooking;
    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        const payload = {
            id:booking.id,
            userId:booking.userId,
            listingId:booking.listingId,
            checkIn,
            checkOut,
            Listing:booking.Listing
        }

        if(checkOut > checkIn){
            editedBooking = dispatch(editOneBooking(payload))
            hideForm();
        }else{
            let errors = [];
            setHasSubmitted(true);
            errors.push("Check out date can not be ealier than check in date or same as check in date");
            setErrors(errors)
            return;
        }
        if(editedBooking){
            setHasSubmitted(false);
            history.push(`/users/bookings`);
        }

    }
    const handleCancel = (e) => {
        e.preventDefault();
        setErrors({});
        hideForm();
        history.push(`/users/bookings`);
    };

    return (
        <div>
            { booking &&
            <div className="edit-booking-container">
            
                <h2>Edit Your Booking</h2>
                { hasSubmitted && errors &&
                <div>
                    {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                </div>
                }   
                <form  onSubmit={handleSubmit}>
                    <div className="edit-date-div">
                        <label>
                            Check In:
                            <input
                            className='edit-booking-input'
                            placeholder='CHECK-IN'
                                type='date'
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                required
                            />
                        </label>
                        <hr></hr>
                        <label>
                            Check Out:
                            <input
                                className='edit-booking-input'
                                placeholder='CHECK-OUT'
                                type='date'
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className='edit-form-btns-div'>
                        <button className="btn-hov btn" type='submit' >
                                Reserve
                        </button>
                        <button className="btn-hov btn" type='button' onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default EditBooking