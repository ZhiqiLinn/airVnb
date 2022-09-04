import { csrfFetch } from "./csrf";
import { ValidationError } from "../utils/validationError";


//---------------------------LOAD TYPE-------------------------------------------
const LOAD_REVIEW = 'review/LOAD_A_REVIEW';
const LOAD_USER_REVIEWS = 'review/LOAD_USER_REVIEWs';
const ADD_REVIEW = 'review/ADD_A_REVIEW';
const DELETE_REVIEW = 'review/DELETE_A_REVIEW';


//----------------------- ACTION CREATOR : LOAD ALL REVIEWS--------------------
const load = (allReviews) => ({
    type: LOAD_REVIEW,
    allReviews,
  });

//----------------------- ACTION CREATOR : LOAD ALL REVIEWS--------------------
const loadUserReview = (allReviewsFromOneUser) => ({
  type: LOAD_USER_REVIEWS,
  allReviewsFromOneUser
});

//----------------------- ACTION CREATOR : ADD A REVIEW--------------------
const add = (addedReview) => ({
  type: ADD_REVIEW,
  addedReview
});


//----------------------- ACTION CREATOR : DELETE A REVIEW--------------------
const remove = (deletedReview) => ({
  type: DELETE_REVIEW,
  deletedReview
});



//----------------------- THUNK : GET ALL REVIEWS--------------------
export const getAllReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`);
    if (response.ok) {
        const allReviews = await response.json();
        // console.log("GET ALL REVIEW THUNK WORKS")
      dispatch(load(allReviews));
    }
  };

  //----------------------- THUNK : GET ALL REVIEWS--------------------
export const getAllReviewsFromOneUser = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/reviews`);
  if (response.ok) {
      const allReviews = await response.json();
      // console.log("GET ALL REVIEW THUNK WORKS")
    dispatch(loadUserReview(allReviews));
  }
};


//----------------------- THUNK : GET ONE REVIEW--------------------
export const getOneReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`);
  if (response.ok) {
      const oneReview = await response.json();
      // console.log("GET ALL REVIEW THUNK WORKS")
    dispatch(add(oneReview));
  }
};

//----------------------- THUNK : EDIT ONE REVIEW--------------------
export const editOneReview = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${data.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const review = await response.json();
      await dispatch(add(review));
      return review
    }
}

//----------------------- THUNK : CREATE ONE REVIEW--------------------
export const createOneReview = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
  const review = await response.json();
  dispatch(add(review));
  return review;

}

//----------------------- THUNK : DELETE ONE REVIEW--------------------
export const deleteOneReview = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${data.id}`, {
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
const initialState = { reviewData: {}, userReviews:{}};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      //--------------------CASE FOR LOAD ALL REVIEWS-------------------------------
      case LOAD_REVIEW:
        const newState = {
          ...state, 
          reviewData: { ...state.reviewData } 
        };
        action.allReviews.forEach(
          (review) => (newState.reviewData[review.id] = review)
        );
        return newState;
      //--------------------CASE FOR LOAD ONE USER'S REVIEWS----------------------
      case LOAD_USER_REVIEWS:
        const userReviewState = {
          ...state, 
          userReviews:{}
        };
        action.allReviewsFromOneUser.forEach(
          (review) => (userReviewState.userReviews[review.id] = review)
        );
        return userReviewState;
      //--------------------CASE FOR LOAD ONE REVIEW-------------------------------
      case ADD_REVIEW:
        const addedState = {
          ...state, 
          reviewData: { 
            ...state.reviewData
          } 
        }
        addedState.reviewData[action.addedReview.id]=action.addedReview
        return addedState;
        
      case DELETE_REVIEW:
        const deletedState = {
          ...state,
          reviewData:{...state.reviewData}};
        // console.log("!-----DELETEDSATE BEFORE DELETE", action)
        delete deletedState.reviewData[action.deletedReview.id];
        // console.log("!--------THIS IS DELETEDSTATE after dewlet,", deletedState)
        return deletedState;

    default:
        return state;

        
    };
  }
export default reviewReducer;