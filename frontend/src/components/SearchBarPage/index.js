import React, { useState,useEffect  } from 'react'
import { useDispatch } from 'react-redux';
import { getAllListings } from '../../store/listing';
import { Link, NavLink } from 'react-router-dom';
import "./SearchBar.css"

const SearchBarPage = ({allListings}) => {
    const dispatch = useDispatch();
    const allListingsArr = Object.values(allListings)

    const [filteredData, setFilteredData] = useState([]);
    
    //-----------FILL THE LISITNGSDATA STATE-------------------
    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch]);

    //------------FILTER KEYWORDS FROM ALL LISTING------------
    const handleFilter = (e) => {
        const searchWord = e.target.value
        const newFilter = allListingsArr.filter(listing => {
            return listing.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)
    }
    //------------CLEAR INPUT -------------------------------
    const handleClear = (e) => {
        e.target.value = "";
    }
    return(
        <div className="search">
            <div className="search-input">
                <input 
                    type="text"
                    placeholder='Enter a Listing Title...'
                    onChange={handleFilter} 
                 />
                    {filteredData.length === 0 ? 
                        <i className="fa-solid fa-magnifying-glass" ></i> 
                        :
                        <i className="fa-solid fa-xmark" onClick={handleClear}></i>
                     }
                    

            </div>
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
    };

export default SearchBarPage;