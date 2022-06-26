
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getAllListings, getOneListing } from '../../store/listing';



const ListingDetailPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    // console.log("-----THIS IS LISTING ID", id) 
    const currentListing = useSelector(state => state.listingState.listingData[id])
    // console.log("THIS IS CURR LISTING", currentListing)

    useEffect(() => {
        dispatch(getAllListings())
        dispatch(getOneListing(id))
    },[dispatch])

    return(
        <div>
            {currentListing && 
            <>
                <div className='detail-page-title-container'>
                    <h2>
                        {currentListing.name}
                    </h2>
                    <p>
                        {`${currentListing.city}, ${currentListing.state}, US`}
                    </p>

                </div>
                <div className='detail-page-imgs-container'>
                    <div>
                        <img src={currentListing.img1}></img>
                    </div>
                    <div>
                        <img src={currentListing.img2}></img>
                    </div>
                    <div>
                        <img src={currentListing.img3}></img>
                    </div>
                </div>
                <hr></hr>
                <div className='detail-page-listing-requirements'>
                    <div>
                        <h4>Self check-in</h4>
                    </div>
                    <div>
                        <h4>Free cancellation for 48 hours.</h4>
                    </div>
                </div>
                <hr></hr>
                <div className='detail-page-listing-about'>
                    <h4>About</h4>
                    <p>{currentListing.about}</p>
                </div>
                <hr></hr>
                <div className='detail-page-listing-amenties'>
                    <h4>What this place offers</h4>
                        Bay view
                        <br></br>Canal view
                        <br></br>Beach access
                        <br></br>Kitchen
                        <br></br>Wifi
                </div>
                <div className='detail-page-booking-container'>

                </div>

            </>
            
            }
        </div>
    )

}
export default ListingDetailPage