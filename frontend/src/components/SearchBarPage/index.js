import React, { useState,useEffect  } from 'react'
import { useDispatch } from 'react-redux';
import { getAllListings } from '../../store/listing';
import { Link, NavLink } from 'react-router-dom';
import "./SearchBar.css"
import searchIcon from '../../images/search.png';
import closeIcon from '../../images/close.png';

const SearchBarPage = ({allListings}) => {
    const dispatch = useDispatch();
    const allListingsArr = Object.values(allListings)

    const [filteredData, setFilteredData] = useState([]);
    
    //------------FILTER KEYWORDS FROM ALL LISTING------------
    let newFilter;
    const handleFilter = (e) => {
        const searchWord = e.target.value
        if(searchWord.length === 0) newFilter=[];
        newFilter = allListingsArr.filter(listing => {
            return listing.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)
    }

    //------------CLEAR INPUT -------------------------------
    const handleClear = (e) => {
        setFilteredData([])
    }

    //-----------FILL THE LISITNGSDATA STATE-------------------
    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch, filteredData]);

    return(
        <div className="search">
            <div className="search-bar-div">
                <label>
                    <h1>Search Your Listing Today!</h1>
                    <br></br>
                <input 
                    className="search-input"
                    type="text"
                    placeholder='Enter a Listing Title...'
                    onChange={handleFilter} 
                 />

                </label>
                <div className='glass'>
                    
                    {filteredData.length === 0 ? 
                        <div>
                            <img height="30px" width="30px" src={searchIcon} alt='search' ></img>   
                        </div>
                        :
                        <div>
                            <img height="30px" width="30px" src={closeIcon} alt='search' onClick={handleClear} ></img>   
                        </div>
                     }
                </div>
                    

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