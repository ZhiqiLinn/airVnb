import { csrfFetch } from "./csrf";



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
  


//----------------------- THUNK : GET ALL LISTINGS--------------------
export const getAllListings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/listings`);
    if (response.ok) {
        const allListings = await response.json();
        // console.log("GET ALL LISTING THUNK WORKS")
      dispatch(load(allListings));
    }
  };

//---------------------------REDUCER---------------------------------------------
const initialState = { listingData: {}};

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
      //--------------------CASE FOR LOAD ALL LISTINGS-------------------------------
      case LOAD_Listing:
        let newState = { ...state, listingData: { ...state.listingData } };
        action.allListings.forEach(
          (listing) => (newState.listingData[listing.id] = listing)
        );
        return newState;

    default:
        return state;

        
    };
}
export default listingReducer;