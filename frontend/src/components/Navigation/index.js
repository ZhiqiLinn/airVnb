import React, {useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CreateListingPage from '../CreateListingPage';
import './Navigation.css';
import DemoUserLogin from '../DemoUserBtn';
import icon from "../../images/logo2.png";
import SearchBarPage from '../SearchBarPage';

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  
  //------------LINK TO HOME PAGE-------------------------
  const linkToHomePage = () => {
    history.push('/')
  }
   //------------LINK TO HOME PAGE-------------------------

  //-----------------SESSION USERS------------------------
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <div>
        <NavLink className="navbar-navlink" exact to="/listings">Check All Listings</NavLink>
      </div>
      <div>
        <NavLink className="navbar-navlink" exact to="/about-me">About</NavLink>
      </div>
      <div>
        <NavLink exact className="navbar-navlink" to="/listings/new">Become a Host</NavLink>
      </div>

      <div>
        <ProfileButton user={sessionUser} />
      </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div> 
          <LoginFormModal />
        </div>
        <div>
          <SignupFormModal />
        </div>
      </>
    );
  }

  return (
    <div className='navigation-container'>
        <div className='navi-left' onClick={linkToHomePage}>
          {/* <img src={icon} height="70px" width="140px"></img> */}
          <span style={{color:"#FF5A5F", fontSize:"45px", marginLeft:'45%'}}>  airvnb</span>
        </div>
          {sessionUser && <div>
            <SearchBarPage />
          </div>}
        <div className='navi-right'>

          {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;