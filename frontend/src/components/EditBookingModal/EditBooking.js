import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { editOneBooking, getAllBookings } from "../../store/booking";


const EditBooking = ({booking, hideForm}) => {
    // console.log("THIS IS BOOKIGN:", booking)

    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

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

        const payload = {
            id:booking.id,
            userId:booking.userId,
            listingId:booking.listingId,
            checkIn,
            checkOut,
            Listing:booking.Listing
        }
        console.log("THIS IS PAYLOAD FOR BOOKING", [payload])
        editedBooking = dispatch(editOneBooking(payload))
        hideForm();

    }
    const handleCancel = (e) => {
        e.preventDefault();
        setErrors({});
        hideForm();
        history.push(`/users/${booking.userId}/bookings`);
    };

    return (
        <div>
            { booking &&
            <>
            
            <h2>Edit Your Booking</h2>
            <form className='Booking-form' onSubmit={handleSubmit}>
                <label>
                    Check In
                    <input
                        type='date'
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                    />
                </label>
                <br></br>
                <label>
                    Check Out
                    <input
                        type='date'
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                    />
                </label>
                <div className='Booking-form-btns-div'>
                    <button className="btn" type='submit' >
                            Reserve
                    </button>
                    <button className="btn" type='button' onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
            </>
            }
        </div>
    )
}

export default EditBooking