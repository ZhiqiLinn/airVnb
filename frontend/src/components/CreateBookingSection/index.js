import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { createOneBooking } from "../../store/booking";
import { Calendar } from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const CreateBookingPage = ({currentSessionUser, currentListing}) => {
    //-----------------TOTAL PRICE CALCULATION-------------------
    let today = new Date();
    let mm = ("0" + (today.getMonth() + 1)).slice(-2)
    let dd = ("0" + today.getDate()).slice(-2)
    let yyyy = today.getFullYear();
    let todayDate = yyyy + '-' + mm + '-' + dd;
    console.log('TODAY DATE ', todayDate)
    
    //1000*3600*24 = seconds in a day

    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);
    
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    console.log("THIS IS CHECKIN DATE", checkInDate)
    console.log("THIS IS CHECKIN DATE", checkOutDate)
    const night = (checkOutDate-checkInDate)/(1000*3600*24)

    //-----------------DISPATCHING ACTION AND HANDLE SUBMIT----------------------
    let createdBooking;
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setHasSubmitted(true);
        
        // console.log("THIS IS CURRENT LISTING ID FOR BOOKIGN", currentListing.id)
        const payload = {
            userId:currentSessionUser,
            listingId:currentListing.id,
            checkIn,
            checkOut
        }
        // console.log("THIS IS PAYLOAD FOR BOOKING", [payload])

        if(checkOut > checkIn){
            console.log("checkOut > checkIn", checkOut > checkIn)
            createdBooking = dispatch(createOneBooking(payload))
        }else{
            let errors = [];
            setHasSubmitted(true);
            errors.push("Check out date can not be the same as Check in date");
            setErrors(errors)
            return;
        }
        if(createdBooking){
            setHasSubmitted(false);
            history.push(`/users/bookings`);
        }

    }

    return (
        <div>
            <h1>Reserve Your Booking</h1>
            { hasSubmitted && errors &&
                <div>
                    {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                </div>
            }
            <form className='Booking-form' onSubmit={handleSubmit}>
                {/* <Calendar 
                    value={new Date()}
                    minDate={new Date()}
                    defaultActiveStartDate={new Date()}
                    onChange={(e) => setCheckIn(e.target.value)}/> */}
                <label>
                    Check In
                    <input
                        type='date'
                        value={checkIn}
                        min={`${yyyy}-${mm}-${dd}`}
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
                   <p>You won't be charged yet</p>
                </div>
                <div>
                    <p>Night x {night}</p>
                    <p>Price x ${currentListing.price}</p>
                    <p>Service Fee x ${currentListing.serviceFee}</p>
                    <p>Total Before Taxes: ${(night)*(currentListing.price + currentListing.serviceFee)}</p>
                </div>
            </form>
        </div>
    )
}

export default CreateBookingPage