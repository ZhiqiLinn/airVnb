import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { createOneBooking } from "../../store/booking";


const CreateBookingPage = ({currentSessionUser, currentListing}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    console.log("THIS IS CURRENT LISTING ID FOR BOOKIGN", currentListing.id)

    let createdBooking;
    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            userId:currentSessionUser,
            listingId:currentListing.id,
            checkIn,
            checkOut
        }
        console.log("THIS IS PAYLOAD FOR BOOKING", [payload])
        createdBooking = dispatch(createOneBooking(payload))
        history.push(`/users/${currentSessionUser}/bookings`);

    }

    return (
        <div>
            <h1>Reserve Your Booking</h1>
            <form className='Booking-form' onSubmit={handleSubmit}>
                <h2>Tell Us About Your Booking</h2>
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
                </div>
            </form>
        </div>
    )
}

export default CreateBookingPage