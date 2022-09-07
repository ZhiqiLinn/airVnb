import React, { useContext, useRef, useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


const ReviewModalContext = React.createContext();
export const ReviewModalProvider = ({children}) => {
    const modalRef = useRef();
    const [value, setValue] = useState()

    useEffect(() => {
        setValue(modalRef.current);
      }, [])

    return(
    <>
        <ReviewModalContext.Provider value={value}>
            {children}
        </ReviewModalContext.Provider>
        <div ref={modalRef} />

    </>
    )
}

export function ReviewModal({ onClose, children }) {
    const modalNode = useContext(ReviewModalContext);
    if (!modalNode) return null;
  
    return ReactDOM.createPortal(
      <div id="modal">
        <div id="modal-background"  onClick={onClose} />
        <div id="review-modal-content">
          {children}
        </div>
      </div>,
      modalNode
    );
  }