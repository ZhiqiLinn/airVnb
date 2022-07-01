import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookingsFromOneUser, getAllBookings} from '../../store/booking';
import { getAllListings } from '../../store/listing';
import HomePage from '../HomePage'
import EditBookingModal from '../EditBookingModal';
import DeleteBookingModal from '../DeleteBookingModal';
import './BookingsPage.css';

const BookingsPage = ({allListings}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allBookings = useSelector(state => state.bookingState.bookingData)

    // console.log("---------THIS IS ALL BOOKINGS FROM BookingPage COMPONENT", allBookings)
    // console.log("---------THIS IS ALL LISTINGS FROM BookingPage COMPONENT", allListings)
    // console.log("----THIS CURRENT USER ", sessionUser.id)
    const sessionUser = useSelector(state => state?.session?.user);
    
    const bookingsArr = Object.values(allBookings)


    useEffect(()=>{
        dispatch(getAllListings())
        dispatch(getAllBookingsFromOneUser(sessionUser.id))
    },[dispatch])
    //--------------CHECK IF A SESSION USER EXISTS-------------------------
    

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <div>
        { bookingsArr && bookingsArr.map(booking => (                     
            <div className='booking-div'>
                <div>
                    <img src={booking?.Listing?.img1} style={{borderRadius:"10px"}} height="200px" width="200px"></img>
                </div>
                <div className='booking-detail-div'>
                    <p style={{fontWeight:"bold"}}>{booking?.Listing?.name}</p>
                    Check In Date : {booking.checkIn}
                    <br></br>
                    Check Out Date : {booking.checkOut}
                </div>
                <div className='booking-btns-div'>
                    <div>
                      <EditBookingModal booking={booking}/>
                    </div>
                    <div>
                      <DeleteBookingModal booking={booking}/>
                    </div>
                </div>
            </div>
        ))}   
        </div>   
      );
    } else {
      sessionLinks = (
        <>
          <HomePage />
        </>
      );
    }
    return(
        <>
           {sessionLinks}
        </>
    )

}
export default BookingsPage;