import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CreateListingPage from '../CreateListingPage';
import './Navigation.css';
import DemoUserLogin from '../DemoUserBtn';
import icon from "../../images/favicon16.png";

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  //------------LINK TO HOME PAGE-------------------------
  const linkToHomePage = () => {
    history.push('/')
  }
  //-----------------SESSION USERS------------------------
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink exact to="/listings/new">Become a Host</NavLink>
        {/* <NavLink exact to="/about-me">About Rena</NavLink> */}
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        
      </>
    );
  }

  return (
    <div>

        <div onClick={linkToHomePage}>
        <img src={icon}></img>
        <span style={{color:"#FF5A5F", fontSize:"large"}}>  airvnb</span>
        </div>
        <NavLink exact to="/listings">Check All Listings</NavLink>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;