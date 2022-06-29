import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookingsFromOneUser, getAllBookings} from '../../store/booking';
import { getAllListings } from '../../store/listing';
import HomePage from '../HomePage'
import EditBookingModal from '../EditBookingModal';
import DeleteBookingModal from '../DeleteBookingModal';

const BookingsPage = ({allListings}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allBookings = useSelector(state => state.bookingState.bookingData)

    // console.log("---------THIS IS ALL BOOKINGS FROM BookingPage COMPONENT", allBookings)
    // console.log("---------THIS IS ALL LISTINGS FROM BookingPage COMPONENT", allListings)
    // console.log("----THIS CURRENT USER ", sessionUser.id)
    if (!useSelector(state => state.session.user.id)){
        history.push('/')
    }    
    const sessionUserId = useSelector(state => state.session.user.id);

    const bookingsArr = Object.values(allBookings)



    useEffect(()=>{
        dispatch(getAllListings())
        dispatch(getAllBookingsFromOneUser(sessionUserId))
    },[dispatch])
    //--------------CHECK IF A SESSION USER EXISTS-------------------------
    
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <div>
        { bookingsArr && bookingsArr.map(booking => (                     
            <div>
<<<<<<< Updated upstream
                <hr></hr>
                <div>
                    <img src={booking?.Listing?.img1} height="100px" width="100px"></img>
                    <p>{booking?.Listing?.name}</p>
                </div>
                <div>
                    <p>Check In Date : {booking.checkIn}</p>
                    <p>Check Out Date : {booking.checkOut}</p>
                </div>
                <div>
                    <button>VIEW DETAILS</button>
                    <EditBookingModal booking={booking}/>
                    <DeleteBookingModal booking={booking}/>
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
=======
            {Object.values(allBookings).map(booking => (
                <div>
                    <div>
                        <p>{allListings[booking.listingId]}</p>
                    </div>
                    <div>
                        <p>Check In Date : {booking.checkIn}</p>
                        <p>Check Out Date : {booking.checkOut}</p>
                    </div>
                </div>
            )

            )
            }   
            </div>   
>>>>>>> Stashed changes
        </>
    )

}
export default BookingsPage;