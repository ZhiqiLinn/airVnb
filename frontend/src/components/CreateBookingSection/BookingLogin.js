import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import DemoUserLogin from "../DemoUserBtn";
import "../LoginFormModal/LoginForm.css";
import { useHistory } from 'react-router-dom';

function BookingLogin({listingId}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    history.push(`/listings/${listingId}`) 
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
  return (
    <>
      <button className="booking-reserve-btn btn-hov" onClick={() => setShowModal(true)}>Login to reserve your booking!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="login-modal-container">
            <div className="login-modal-title">
              <p>Log in</p>
            </div>
            <hr></hr>
            <form onSubmit={handleSubmit}>
              <div>
                <h3 style={{marginLeft:"10%"}}>Welcome to AirVnb</h3>
              </div>
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
              <div className="login-input-div">
                <label>
                  <input
                    className="login-input"
                    placeholder="Username or Email"
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                  />
                </label>
                <hr></hr>
                <label>
                  <input
                    className="login-input"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>
                
              <button className="login-modal-btn" type="submit">Continue</button>
            </form>
            <hr></hr>
            <div className="login-modal-demo-user">
              <div>
                <span style={{fontSize:"small"}}>Don't have an account? Log in as a Demo User!</span>
              </div>
              <br></br>
              <div>
                <DemoUserLogin />
              </div>
            </div>
          </div>

        </Modal>
      )}
    </>
  );
}

export default BookingLogin;