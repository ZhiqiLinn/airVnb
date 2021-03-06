import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import ListingsPage from "./components/ListingsPage";
import CreateListingPage from "./components/CreateListingPage";
import HomePage from "./components/HomePage"
import ListingDetailPage from "./components/ListingDetailPage";
import BookingsPage from "./components/BookingsPage";
import UserProfile from "./components/Navigation/UserProfile";
import UserListingsPage from "./components/UserListingsPage";
import PageNotFound from "./components/PageNotFound"
import "./index.css"
import AboutMePage from "./components/AboutMePage";
import SearchBarPage from "./components/SearchBarPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionUser = useSelector(state => state?.session?.user);    
  const allBookings = useSelector(state => state.bookingState.bookingData)
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
          <Route path="/users" allListings={allListings} exact>
            <UserProfile/>
          </Route>
          <Route path="/users/listings" exact>
            <UserListingsPage/>
          </Route>
          <Route path="/users/bookings" exact>
            <BookingsPage allListings={allListings} />
          </Route>
          <Route path="/about-me" exact>
            <AboutMePage />
          </Route>
          <Route path="/search" exact>
              <SearchBarPage allListings={allListings} />
          </Route>
          <Route>
              <PageNotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}


export default App;