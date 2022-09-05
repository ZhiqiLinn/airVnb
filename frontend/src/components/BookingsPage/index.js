import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookingsFromOneUser, getAllBookings } from "../../store/booking";
import { getAllListings } from "../../store/listing";
import HomePage from "../HomePage";
import EditBookingModal from "../EditBookingModal";
import DeleteBookingModal from "../DeleteBookingModal";
import "./BookingsPage.css";

const BookingsPage = ({ users }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state?.session?.user);
  const allBookings = useSelector((state) => state.bookingState.userBookings);
  const bookingsArr = Object.values(allBookings);

  useEffect(() => {
    dispatch(getAllListings());
    dispatch(getAllBookingsFromOneUser(sessionUser.id));
  }, [dispatch]);

  //-----------------DATE FORMAT
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const DateFormat = (checkIn, checkOut) => {
    let checkInDate = new Date(checkIn);
    let checkOutDate = new Date(checkOut);
    let dd1 = checkInDate.getDate();
    let mm1 = months[checkInDate.getMonth()];
    let yy1 = checkInDate.getFullYear();
    let dd2 = checkOutDate.getDate();
    let mm2 = months[checkOutDate.getMonth()];
    let yy2 = checkOutDate.getFullYear();
    if (yy1 === yy2 && mm1 === mm2) {
      return `${mm1} ${dd1}-${dd2}, ${yy1}`;
    }
    if (yy1 === yy2 && mm1 !== mm2) {
      return `${mm1} ${dd1} - ${mm2} ${dd2}, ${yy1}`;
    }
    if (yy1 !== yy2 && mm1 !== mm2) {
      return `${mm1} ${dd1}, ${yy1} - ${mm2} ${dd2}, ${yy2}`;
    }
  };
  //-------------TODAY'S DATE---------------------------------------------

  const expiredBooking = (checkOut) => {
    let checkOutDate = new Date(checkOut);
    let today = new Date();
    let isExpired = (checkOutDate - today) / (1000 * 3600 * 24);
    if (isExpired < 0) return false;
    return true;
  };

  // console.log(expiredBooking('2022-8-20'))

  let onGoingBookings = [];
  let expiredBookings = [];

  bookingsArr.forEach((booking) => {
    if (!expiredBooking(booking.checkOut)) expiredBookings.push(booking);
    if (expiredBooking(booking.checkOut)) onGoingBookings.push(booking);
  });

  // console.log("1",onGoingBookings)
  // console.log("2",expiredBookings)

  //-------------------------GET HOST'S INFO
  const findHostName = (userId) => {
    let result = users.filter((user) => user.id === userId);
    console.log(result);
    return result[0]?.username;
  };
  //---------------------
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="booking-layout">
      <div>
        <h1>Your upcoming trip</h1>
        {!onGoingBookings.length && (
          <div className="bookings-container">
            <div className="notrip-card">
              <div className="notrip-left">
                <i className="fa-solid fa-plane fa-2x" style={{color:"#FF5A5F"}}></i>
                <p>No Trip booked...yet!</p>
                <p>
                  Time to dust off your bags and start getting ready for your
                  next adventure.
                </p>
                <button className="btn" onClick={() => history.push("/listings")}>
                  Start Searching
                </button>
              </div>
              <img
                className="notrip-card-img"
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              >
              </img>
            </div>
          </div>
        )}
        {onGoingBookings.length &&
          onGoingBookings.map((booking) => (
            <div className="single-booking-div">
              <div>
                <img
                  src={booking.Listing.img1}
                  style={{ borderRadius: "10px" }}
                  height="75px"
                  width="75px"
                ></img>
              </div>
              <div className="booking-detail-div">
                <p style={{ fontWeight: "bold" }}>{booking.Listing.name}</p>
                <p>{`Hosted by ${findHostName(booking.Listing.userId)}`}</p>
                {DateFormat(booking.checkIn, booking.checkOut)}
                <div className="booking-btns-div">
                  <div>
                    <EditBookingModal booking={booking} />
                  </div>
                  <div>
                    <DeleteBookingModal booking={booking} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <h1>Where you've been</h1>
        <div className="expired-booking-container">
          {expiredBookings &&
            expiredBookings.slice(0, 9).map((booking) => (
              <div className="single-booking-div">
                <div>
                  <img
                    src={booking.Listing.img1}
                    style={{ borderRadius: "10px" }}
                    height="75px"
                    width="75px"
                  ></img>
                </div>
                <div className="booking-detail-div">
                  <div style={{ fontWeight: "bold" }}>
                    {booking.Listing.name}
                  </div>
                  <div>{`Hosted by ${findHostName(
                    booking.Listing.userId
                  )}`}</div>
                  {DateFormat(booking.checkIn, booking.checkOut)}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default BookingsPage;
