import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookingsFromOneUser, getAllBookings} from '../../store/booking';
import { getAllListings } from '../../store/listing';
import ListingDetailPage from '../ListingDetailPage';

const BookingsPage = ({allListings, allBookings, sessionUser}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // console.log("---------THIS IS ALL BOOKINGS FROM BookingPage COMPONENT", allBookings)
    // console.log("---------THIS IS ALL LISTINGS FROM BookingPage COMPONENT", allListings)
    // console.log("----THIS CURRENT USER ", sessionUser.id)
    
    // const currentListing = allListings[]

    useEffect(()=>{
        dispatch(getAllListings())
        dispatch(getAllBookingsFromOneUser(sessionUser.id))
    },[dispatch])

    return(
        <>
            <div>
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
        </>
    )

}
export default BookingsPage;