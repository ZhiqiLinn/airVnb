import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookingsFromOneUser, getAllBookings} from '../../store/booking';
import { getAllListings } from '../../store/listing';
import HomePage from '../HomePage'
import EditBookingModal from '../EditBookingModal';
import DeleteBookingModal from '../DeleteBookingModal';
import './BookingsPage.css';

const BookingsPage = () => {
    //--------------WHEN SESSION USER IS NOT EXISTS-------------------------
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state?.session?.user);
    const allBookings = useSelector(state => state.bookingState.userBookings)
    const [showBooking, setShowBooking] = useState(true)
    const [showExpiredBooking, setShowExpiredBooking] = useState(false)
    // console.log("---------THIS IS ALL BOOKINGS FROM BookingPage COMPONENT", allBookings)
    // console.log("---------THIS IS ALL LISTINGS FROM BookingPage COMPONENT", allListings)
    // console.log("----THIS CURRENT USER ", sessionUser.id)
    const bookingsArr = Object.values(allBookings)
    
    useEffect(()=>{
      dispatch(getAllListings())
      dispatch(getAllBookingsFromOneUser(sessionUser.id))
    },[dispatch])
    
    if (!sessionUser) {
      return <Redirect to='/' />
          
    }
    //-------------TODAY'S DATE---------------------------------------------
    // let today = new Date();
    // let mm = ("0" + (today.getMonth() + 1)).slice(-2)
    // let dd = ("0" + today.getDate()).slice(-2)
    // let yyyy = today.getFullYear();
    const expiredBooking = (checkOut) => {
      let checkOutDate = new Date(checkOut)
      let today = new Date()
      let isExpired = (checkOutDate-today)/(1000*3600*24)
      console.log(isExpired)
      if(isExpired < 0) return false
      return true
    }

    console.log(expiredBooking('2022-8-20'))



    return(
      <div className='booking-layout'>
      <div className="booking-sidebar">
          <button className={showBooking ? `user-profile-btns actived-profile-btn`: 'user-profile-btns'} 
                  onClick={()=>{
                      setShowBooking(true)
                      setShowExpiredBooking(false)
              }}>My Booking 
          </button>
          <button className={showExpiredBooking ? `user-profile-btns actived-profile-btn`: 'user-profile-btns'} 
                  onClick={()=>{
                      setShowBooking(false)
                      setShowExpiredBooking(true)
              }}> ExpiredBooking 
          </button>
      </div>
      <div>
          { bookingsArr && bookingsArr.map(booking => 
              (     
                <>
                  { showBooking && expiredBooking(booking.checkOut) &&
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
                  }
                  { showExpiredBooking && !expiredBooking(booking.checkOut) &&
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
                        
                    </div>
                  }
                </>  
                      
            )
          )}   
        </div>   
      </div>
    );

}
export default BookingsPage;