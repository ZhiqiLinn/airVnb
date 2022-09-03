import React, { useEffect  } from 'react'
import { useDispatch } from 'react-redux';
import { getAllListings } from '../../store/listing';
import { NavLink, useParams, useHistory} from "react-router-dom";
import "./SearchBar.css"

const SearchResult = ({allListings}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const allListingsArr = Object.values(allListings)
    const {searchterms} = useParams()
    const searchArr = searchterms.split(' ')
    const filter_Listings = allListingsArr.filter(listing => listing.name.toLowerCase().includes(searchArr[0].toLowerCase()))
    

    //-----------FILL THE LISITNGSDATA STATE-------------------
    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch]);


    if(filter_Listings.length === 0){
        return (
            <div >
                <div></div>
                <p>No Listing Found!
                </p>
            </div>
        )
    }

    const handleSubmit = (searchTerm) => {
        history.push(`/search/${searchTerm}`)
    }
    return(
        <div>
            { filter_Listings !== 0 &&
            <div className='listings-container'>
                {filter_Listings.map(listing => {
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

export default SearchResult;