import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";
import { ListingModalProvider } from "./context/ListingModal";
import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import * as listingActions from "./store/listing";
import * as bookingActions from "./store/booking"
import * as reviewActions from './store/review'
import { ReviewModalProvider } from "./context/ReviewModal";
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.listingActions = listingActions;
  window.bookingActions = bookingActions;
  window.reviewActions = reviewActions
}

function Root() {
  return (
    <Provider store={store}>
      <ReviewModalProvider>
      <ListingModalProvider>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </ListingModalProvider>
      </ReviewModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);