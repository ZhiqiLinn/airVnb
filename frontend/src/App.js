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
import SearchResult from "./components/SearchBarPage/SearchResult"
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const users = Object.values(useSelector(state => state.session)); 
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
          <ProtectedRoute path="/listings/new" exact>
            <CreateListingPage sessionUser={sessionUser}/>
          </ProtectedRoute>
          <Route path="/listings/:id" exact>
            <ListingDetailPage allListings={allListings} sessionUser={sessionUser}/>
          </Route>
          <ProtectedRoute path="/users" allListings={allListings} exact>
            <UserProfile/>
          </ProtectedRoute>
          <ProtectedRoute path="/users/listings" exact>
            <UserListingsPage/>
          </ProtectedRoute>
          <ProtectedRoute path="/users/bookings" exact>
            <BookingsPage allListings={allListings} users={users}/>
          </ProtectedRoute>
          <Route path="/about-me" exact>
            <AboutMePage />
          </Route>
          <Route path='/search/:searchterms'>
            <SearchResult allListings={allListings}/>
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