import { csrfFetch } from "./csrf";
import { ValidationError } from "../utils/validationError";


//---------------------------LOAD TYPE-------------------------------------------
const LOAD_Listing = 'listing/LOAD_A_LISTING';
const ADD_Listing = 'listing/ADD_A_LISTING';
const EDIT_Listing = 'listing/EDIT_A_LISTING';
const DELETE_Listing = 'listing/DELETE_A_LISTING';

//----------------------- ACTION CREATOR : LOAD ALL LISTINGS--------------------
const load = (allListings) => ({
    type: LOAD_Listing,
    allListings,
  });
  

//----------------------- ACTION CREATOR : LOAD ALL LISTINGS--------------------
const add = (addedListing) => ({
  type: ADD_Listing,
  addedListing
});


//----------------------- THUNK : GET ALL LISTINGS--------------------
export const getAllListings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/listings`);
    if (response.ok) {
        const allListings = await response.json();
        // console.log("GET ALL LISTING THUNK WORKS")
      dispatch(load(allListings));
    }
  };


//----------------------- THUNK : GET ONE LISTING--------------------
export const getOneListing = (listingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/listings/${listingId}`);
  if (response.ok) {
      const oneListing = await response.json();
      // console.log("GET ALL LISTING THUNK WORKS")
    dispatch(add(oneListing));
  }
};

//----------------------- THUNK : CREATE ONE LISTING--------------------
export const createAListing = (data) => async (dispatch) => {
  try {
    const response = await fetch(`/api/listings`, {
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
    const listing = await response.json();
    dispatch(add(listing));
    return listing;
  } catch (error) {
    throw error;
  }
};
//---------------------------REDUCER---------------------------------------------
const initialState = { listingData: {}};

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
      //--------------------CASE FOR LOAD ALL LISTINGS-------------------------------
      case LOAD_Listing:
        let newState = {
          ...state, 
          listingData: { ...state.listingData } 
        };
        action.allListings.forEach(
          (listing) => (newState.listingData[listing.id] = listing)
        );
        return newState;

      //--------------------CASE FOR LOAD ONE LISTING-------------------------------
      case ADD_Listing:
        let addedState = {
          ...state, 
          listingData: { 
            ...state.listingData,
            [action.addedListing.id]:action.addedListing
          } 
        }
        return addedState;

    default:
        return state;

        
    };
}
export default listingReducer;