import React, { useContext, useState, useEffect, createContext } from 'react';
// import ReactDOM from 'react-dom';
// import { useSelector } from 'react-redux';
import './ListingContext.css';


export const ListingContext = createContext();
export const useListing = () => useContext(ListingContext);
// const allListings = useSelector(state => state.listingState.allListings)
// console.log("---------THIS IS ALL LISTINGS FROM LISTING CONTEXT", allListings)

export function ListingProvider ({children}) {
    const [currentListing, setCurrentListing] = useState({})
    return(
        <ListingContext.Provider value={{currentListing, setCurrentListing}}>
            {children}
        </ListingContext.Provider>

    )
}


