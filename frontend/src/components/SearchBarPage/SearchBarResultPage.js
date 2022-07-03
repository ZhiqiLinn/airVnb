import React, { useState,useEffect , useContext } from 'react'

import { NavLink, useHistory } from 'react-router-dom';
import {ModalContext} from '../../context/Modal'
const SearchBarResultPage = () => {
    const {filteredData, setFilteredData} = useContext(ModalContext)
    console.log("THIS IS FILTERED DATA IN SEARCH RESULT,", filteredData)
    return(
        <div className="search">
        { filteredData != 0 &&
        <div className='listings-container'>
            {filteredData.map(listing => {
                return (
                    <NavLink 
                    style={{ textDecoration: 'none', color: 'black' }} 
                    activeStyle={{ color: 'black' }}
                    to={`/listings/${listing.id}`}>
                        <div className='listing-div'>
                            <img src={listing.img1} alt={listing.name} className='listing-img'></img>
                            <div className='listing-name'>
                                {`${listing.city}, ${listing.state}`}
                            </div>
                            <div className='listing-price'>
                                ${listing.price} night
                            </div>
                        </div>
                    </NavLink>
                )
            })}
        </div>
        }
    </div>
    )
}

export default SearchBarResultPage