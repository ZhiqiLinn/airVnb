import React, { useState,useEffect  } from 'react'
import { useDispatch } from 'react-redux';
import { getAllListings } from '../../store/listing';
import { NavLink } from 'react-router-dom';
import "./SearchBar.css"

const SearchBarPage = ({allListings}) => {
    const dispatch = useDispatch();
    const allListingsArr = Object.values(allListings)

    const [filteredData, setFilteredData] = useState(allListingsArr);
    
    //------------FILTER KEYWORDS FROM ALL LISTING------------
    let newFilter;
    const handleFilter = (e) => {
        const searchWord = e.target.value
        console.log(searchWord.length)
        newFilter = allListingsArr.filter(listing => {
            return listing.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)
    }

    //-----------FILL THE LISITNGSDATA STATE-------------------
    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch, filteredData]);

    return(
        <div className="search">
            <div className="search-bar-div">
                <label>
                    <p style={{fontSize:"xxx-large"}}>Search Your Listing Today!</p>
                    <br></br>
                <input 
                    className="search-input"
                    type="text"
                    placeholder='Enter a Listing Title...'
                    onChange={handleFilter} 
                 />

                </label>
                    

            </div>
            { filteredData !== 0 &&
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
                                <div style={{fontSize:"small", color:"grey"}}>
                                    {listing.name}
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