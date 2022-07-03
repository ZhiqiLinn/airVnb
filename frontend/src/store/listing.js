import { csrfFetch } from "./csrf";
import { ValidationError } from "../utils/validationError";


//---------------------------LOAD TYPE-------------------------------------------
const LOAD_Listing = 'listing/LOAD_A_LISTING';
const LOAD_USER_Listings = 'listing/LOAD_USER_Listings';
const ADD_Listing = 'listing/ADD_A_LISTING';
const DELETE_Listing = 'listing/DELETE_A_LISTING';


//----------------------- ACTION CREATOR : LOAD ALL LISTINGS--------------------
const load = (allListings) => ({
    type: LOAD_Listing,
    allListings,
  });

//----------------------- ACTION CREATOR : LOAD ALL LISTINGS--------------------
const loadUserListing = (allListingsFromOneUser) => ({
  type: LOAD_USER_Listings,
  allListingsFromOneUser
});

//----------------------- ACTION CREATOR : ADD A LISTING--------------------
const add = (addedListing) => ({
  type: ADD_Listing,
  addedListing
});


//----------------------- ACTION CREATOR : DELETE A LISTING--------------------
const remove = (deletedListing) => ({
  type: DELETE_Listing,
  deletedListing
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

  //----------------------- THUNK : GET ALL LISTINGS--------------------
export const getAllListingsFromOneUser = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/listings`);
  if (response.ok) {
      const allListings = await response.json();
      // console.log("GET ALL LISTING THUNK WORKS")
    dispatch(loadUserListing(allListings));
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

//----------------------- THUNK : EDIT ONE LISTING--------------------
export const editOneListing = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${data.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const listing = await response.json();
      await dispatch(add(listing));
      return listing
    }
}

//----------------------- THUNK : CREATE ONE LISTING--------------------
export const createOneListing = (data) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/listings`, {
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

//----------------------- THUNK : DELETE ONE LISTING--------------------
export const deleteOneListing = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/listings/${data.id}`, {
    method: "delete",

  });
  
  if (response.ok) {
    const msg = await response.json();
    if(msg.message === "Success"){
      dispatch(remove(data));
    }

  }
}
//---------------------------REDUCER---------------------------------------------
const initialState = { listingData: {}, userListings:{}};

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
      //--------------------CASE FOR LOAD ALL LISTINGS-------------------------------
      case LOAD_Listing:
        const newState = {
          ...state, 
          listingData: { ...state.listingData } 
        };
        action.allListings.forEach(
          (listing) => (newState.listingData[listing.id] = listing)
        );
        return newState;
      //--------------------CASE FOR LOAD ONE USER'S LISTINGS----------------------
      case LOAD_USER_Listings:
        const userListingState = {
          ...state, 
          userListings:{}
        };
        action.allListingsFromOneUser.forEach(
          (listing) => (userListingState.userListings[listing.id] = listing)
        );
        return userListingState;
      //--------------------CASE FOR LOAD ONE LISTING-------------------------------
      case ADD_Listing:
        const addedState = {
          ...state, 
          listingData: { 
            ...state.listingData
          } 
        }
        addedState.listingData[action.addedListing.id]=action.addedListing
        return addedState;
        
      case DELETE_Listing:
        const deletedState = {
          ...state,
          listingData:{...state.listingData}};
        // console.log("!-----DELETEDSATE BEFORE DELETE", action)
        delete deletedState.listingData[action.deletedListing.id];
        // console.log("!--------THIS IS DELETEDSTATE after dewlet,", deletedState)
        return deletedState;

    default:
        return state;

        
    };
  }
export default listingReducer;