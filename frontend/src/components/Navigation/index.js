import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import icon from "../../images/favicon16.png";
import SearchBarPage from '../SearchBarPage';

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  //------------LINK TO HOME PAGE-------------------------
  const linkToHomePage = () => {
    history.push('/')
  }
   //------------LINK TO HOME PAGE-------------------------
   const linkToSearchPage = () => {
    history.push('/search')
  }
  //-----------------SESSION USERS------------------------
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
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
          <img src={icon}></img>
          <span style={{color:"#FF5A5F", fontSize:"x-large"}}>  airvnb</span>
        </div>
        <div>
          <SearchBarPage />
        </div>
        <div className='navi-right'>
          <div>
            <NavLink className="navbar-navlink" exact to="/listings">Check All Listings</NavLink>
          </div>
          <div>
            <NavLink className="navbar-navlink" exact to="/about-me">About Rena</NavLink>
          </div>
          {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;