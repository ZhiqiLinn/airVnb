import React, { useContext, useRef, useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


const ListingModalContext = React.createContext();
export const ListingModalProvider = ({children}) => {
    const modalRef = useRef();
    const [value, setValue] = useState()

    useEffect(() => {
        setValue(modalRef.current);
      }, [])

    return(
    <>
        <ListingModalContext.Provider value={value}>
            {children}
        </ListingModalContext.Provider>
        <div ref={modalRef} />

    </>
    )
}

export function ListingModal({ onClose, children }) {
    const modalNode = useContext(ListingModalContext);
    if (!modalNode) return null;
  
    return ReactDOM.createPortal(
      <div id="modal">
        <div id="modal-background"  onClick={onClose} />
        <div id="listing-modal-content">
          {children}
        </div>
      </div>,
      modalNode
    );
  }