import { csrfFetch } from "./csrf";
import { ValidationError } from "../utils/validationError";


//---------------------------LOAD TYPE-------------------------------------------
const LOAD_Booking = 'booking/LOAD_A_BOOKING';
const ADD_Booking = 'booking/ADD_A_BOOKING';
const EDIT_Booking = 'booking/EDIT_A_BOOKING';
const DELETE_Booking = 'booking/DELETE_A_BOOKING';

//----------------------- ACTION CREATOR : LOAD ALL BOOKINGS--------------------
const loadBooking = (allBookings) => ({
    type: LOAD_Booking,
    allBookings,
  });
  

//----------------------- ACTION CREATOR : ADD A BOOKING--------------------
const addBooking = (addedBooking) => ({
  type: ADD_Booking,
  addedBooking
});

//----------------------- ACTION CREATOR : EDIT A BOOKING--------------------
const editBooking = (editedBooking) => ({
  type: EDIT_Booking,
  editedBooking
});

//----------------------- ACTION CREATOR : DELETE A BOOKING--------------------
const removeBooking = (deletedBooking) => ({
  type: DELETE_Booking,
  deletedBooking
});



//----------------------- THUNK : GET ALL BOOKINGS--------------------
export const getAllBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`);
    if (response.ok) {
        const allBookings = await response.json();
        // console.log("GET ALL BOOKING THUNK WORKS")
      dispatch(loadBooking(allBookings));
    }
  };


//----------------------- THUNK : GET ONE BOOKING--------------------
export const getOneBooking = (bookingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${bookingId}`);
  if (response.ok) {
      const oneBooking = await response.json();
      // console.log("GET ALL BOOKING THUNK WORKS")
    dispatch(addBooking(oneBooking));
  }
};

//----------------------- THUNK : EDIT ONE BOOKING--------------------
export const editOneBooking = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${data.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      const booking = await response.json();
      dispatch(editBooking(booking));
    }
}

//----------------------- THUNK : CREATE ONE BOOKING--------------------
export const createOneBooking = (data) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/bookings`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      let error;
      if (response.status === 422) {
        error = await response.json();
        throw new ValidationError(error.errors, response.statusText);
      } else {
        let errorJSON;
        error = await response.text();
        try {
          errorJSON = JSON.parse(error);
        } catch {
          throw new Error(error);
        }
        throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
      }
    }
    const booking = await response.json();
    dispatch(addBooking(booking));
    return booking;
  } catch (error) {
    throw error;
  }
};

//----------------------- THUNK : DELETE ONE BOOKING--------------------
export const deleteOneBooking = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${data.id}`, {
    method: "delete",

  });
  
  if (response.ok) {
    const booking = await response.json();
    dispatch(removeBooking(booking));
  }
}
//---------------------------REDUCER---------------------------------------------
const initialState = { bookingData: {}};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      //--------------------CASE FOR LOAD ALL BOOKINGS-------------------------------
      case LOAD_Booking:
        const newState = {
          ...state, 
          bookingData: { ...state.bookingData } 
        };
        action.allBookings.forEach(
          (booking) => (newState.bookingData[booking.id] = booking)
        );
        return newState;

      //--------------------CASE FOR LOAD ONE BOOKING-------------------------------
      case ADD_Booking:
        const addedState = {
          ...state, 
          bookingData: { 
            ...state.bookingData,
            [action.addedBooking.id]:action.addedBooking
          } 
        }
        return addedState;
      case DELETE_Booking:
        const deletedState = {...state};
        delete deletedState[action.deletedBooking.id];
        return deletedState;
    default:
        return state;

        
    };
  }
export default bookingReducer;