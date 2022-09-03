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
    const allBookings = useSelector(state => state.bookingState.userBookings)

    // console.log("---------THIS IS ALL BOOKINGS FROM BookingPage COMPONENT", allBookings)
    // console.log("---------THIS IS ALL LISTINGS FROM BookingPage COMPONENT", allListings)
    // console.log("----THIS CURRENT USER ", sessionUser.id)
    const sessionUser = useSelector(state => state?.session?.user);
    const bookingsArr = Object.values(allBookings).reverse()
    
        useEffect(()=>{
            dispatch(getAllListings())
            dispatch(getAllBookingsFromOneUser(sessionUser.id))
        },[dispatch])

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
    //--------------WHEN SESSION USER IS NOT EXISTS-------------------------
    let sessionLinks;
    if (!sessionUser) {
      sessionLinks = (
        <>
          <HomePage />
          
        </>
      );
    }
    //--------------WHEN SESSION USER EXISTS BUT DOESNT HAVE ANY BOOKING------------
    if (bookingsArr.length) {
      sessionLinks = (
        <div>
          { bookingsArr && bookingsArr.map(booking => 
              (               
                <div className='booking-div'>
                { expiredBooking(booking.checkOut) &&
                    <>
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
                  </>
                }
                </div>
            )
          )}   
        </div>    
      );
    }else{

      sessionLinks = (
      <>
        <h1>You have no booking reserved.</h1>
      </>
    )}

    return(
      <>
      {sessionLinks}
      </>
    );

}
export default BookingsPage;