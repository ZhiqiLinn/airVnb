import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { createOneBooking } from "../../store/booking";
import BookingLogin from "./BookingLogin";
import './CreateBooking.css'

const CreateBookingPage = ({currentSessionUser, currentListing}) => {
    //-----------------TOTAL PRICE CALCULATION-------------------
    let today = new Date();
    let mm = ("0" + (today.getMonth() + 1)).slice(-2)
    let dd = ("0" + today.getDate()).slice(-2)
    let yyyy = today.getFullYear();
    // console.log('TODAY DATE ', todayDate)
    
    //1000*3600*24 = seconds in a day

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
    const night = (checkOutDate-checkInDate)/(1000*3600*24)
    console.log("11", currentSessionUser.id)
    console.log("22",currentListing.userId)
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
            createdBooking = dispatch(createOneBooking(payload))
        }else{
            let errors = [];
            setHasSubmitted(true);
            errors.push("Check out date can not be ealier than check in date or same as check in date");
            setErrors(errors)
            return;
        }
        if(createdBooking){
            setHasSubmitted(false);
            history.push(`/users/bookings`);
        }

    }
    //-----------SHOW CALCULATION WHEN CHECKOUT & CHECKIN DATES ARE SELECTED------------
    let calculationCard;

        if(checkOutDate > checkInDate){
            calculationCard=(
                <div >
                    <p className="wont-charged-text">You won't be charged.</p>
                    <div className='booking-calculation-div'>
                        <p>Night x {night}</p>
                        <p>Price x ${currentListing.price}</p>
                        <p>Service Fee x ${currentListing.serviceFee}</p>
                        <p>Total Before Taxes: ${(night)*(currentListing.price + currentListing.serviceFee)}</p>
                    </div>
                </div>
            )
        }else{
            calculationCard=(
                <div >
                    <p className="wont-charged-text">You won't be charged.</p>
                    <div className='booking-calculation-div' >
                        <p>Night x 0</p>
                        <p>Price x ${currentListing.price}</p>
                        <p>Service Fee x ${currentListing.serviceFee}</p>
                        <p>Total Before Taxes: $0</p>
                    </div>
                </div>
            )
        }

    return (
        <> 
             <div className='detail-page-booking-container'>
                    <h1 className='booking-modal-title'>Reserve Your Booking</h1>
                    { hasSubmitted && errors &&
                        <div>
                            {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                        </div>
                    }
                    <form className='Booking-form' onSubmit={handleSubmit}>
                        <div className="checkin-checkout-div">
                            <label>
                                Check In:
                                <input
                                    className='checkin-checkout-input'
                                    placeholder='CHECK-IN'
                                    type='date'
                                    value={checkIn}
                                    min={`${yyyy}-${mm}-${dd}`}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    required
                                />
                            </label>
                            <hr></hr>
                            <label>
                                Check Out:
                                <input
                                    className='checkin-checkout-input'
                                    type='date'
                                    placeholder='CHECK-OUT'
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        {calculationCard}
                        { currentSessionUser !== currentListing.userId && <div className='Booking-form-btns-div'>
                            <button className="booking-reserve-btn btn-hov" type='submit' >
                                    Reserve
                            </button>


                        </div>}
                        { currentSessionUser === currentListing.userId && <div className='Booking-form-btns-div'>
                            <button className="booking-reserve-btn btn-hov" disabled>
                                    Reserve 
                            </button>
                            <p style={{textAlign:"center"}}>Owner can't make reservation for owned listing. <br></br>This is how your booking card appears for guest</p>

                        </div>}

                    </form>
                    {!currentSessionUser && <div className='Booking-form-btns-div'>
                    <BookingLogin listingId={currentListing.id}/>
                    </div>}
                </div>

        </>
    )
}

export default CreateBookingPage