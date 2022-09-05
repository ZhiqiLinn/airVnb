import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import bookingReducer from "./booking";
import listingReducer from "./listing";
import reviewReducer from "./review";
import sessionReducer from './session';

const rootReducer = combineReducers({
  session: sessionReducer,
  listingState: listingReducer,
  bookingState: bookingReducer,
  reviewState: reviewReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
