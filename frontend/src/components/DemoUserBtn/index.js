// frontend/src/components/LoginFormPage/index.js
import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import "./DemoUser.css"
const DemoUserLogin = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const credential = "Demo"
  const password = "password"
  const history = useHistory();
  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({ credential, password }))
    history.push('/listings')
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
            <input
            hidden="true"
            type="text"
            value={credential}
            required
            />
            <input
            hidden="true"
            type="password"
            value={password}
            required
            />
        <button className="demo-user-btn" type="submit">Demo User</button>
        </form>
      </div>
  );
}

export default DemoUserLogin

