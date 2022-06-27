import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import ListingsPage from "./components/ListingsPage";
import CreateListingPage from "./components/CreateListingPage";
import HomePage from "./components/HomePage"
import ListingDetailPage from "./components/ListingDetailPage";
import DeleteMsgPage from "./components/DeleteListingModal/DeleteMsgPage";
import BookingsPage from "./components/BookingsPage";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionUser = useSelector(state => state?.session?.user);    

  const allListings = useSelector(state => state.listingState.listingData)  

  //RESTORE USER SO THAT YOUR WEBSITE REMEMBER THE LOGGED IN USER
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/listings" exact >
            <ListingsPage allListings={allListings} sessionUser={sessionUser}/>
          </Route>
          <Route path="/listings/new" exact>
            <CreateListingPage sessionUser={sessionUser}/>
          </Route>
          <Route path="/listings/:id" exact>
            <ListingDetailPage allListings={allListings} sessionUser={sessionUser}/>
          </Route>
          <Route path="/bookings" exact>
            <BookingsPage />
          </Route>
        </Switch>
      )}
    </>
  );
}


export default App;