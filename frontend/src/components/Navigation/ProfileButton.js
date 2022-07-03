import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import "./Navigation.css"


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <div onClick={openMenu}>
        <img src={user.profileUrl}></img>
        <i className="fa-solid fa-bars"></i>
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li><NavLink className="dropdown-menu-navlink" to={`/users`}>Profile</NavLink></li>
          <hr></hr>
          <li><NavLink className="dropdown-menu-navlink" to={`/users/listings`}>Your Listings</NavLink></li>
          <hr></hr>
          <li><NavLink className="dropdown-menu-navlink" to={`/users/bookings`}>Your Bookings</NavLink></li>
          <hr></hr>
          <li onClick={logout}><NavLink className="dropdown-menu-navlink" to={`/`}>Log out</NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;