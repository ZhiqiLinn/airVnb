import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../../store/booking';

const BookingsPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allBookings = useSelector(state => state.bookingState.bookingData)
    const allListings = useSelector(state => state.listingState.listingData)

    console.log("---------THIS IS ALL LISTINGS FROM BookingPage COMPONENT", allBookings)
    const currentSessionUser = useSelector(state => state.session.user.id);    
    console.log("----THIS IS CURRENT SESSION USER ID ", currentSessionUser)
    
    const sessionUserBookings = Object.values(allBookings).filter(({userId}) => userId === currentSessionUser)
    console.log("----THIS user's booking ", sessionUserBookings)
    
    const bookingListingId = sessionUserBookings.listingId


    
    console.log("----THIS user's booking's listing ", bookingListingId)

    useEffect(()=>{
        dispatch(getAllBookings())
    },[dispatch])

    return(
        <>
            <div>
            {Object.values(sessionUserBookings).map((booking) => (
                <div>
                    
                </div>
            ))}
            </div>
        </>
    )

}
export default BookingsPage;