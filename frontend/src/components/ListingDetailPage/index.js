
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllListings, getOneListing } from '../../store/listing';
import DeleteListingModal from '../DeleteListingModal';
import EditListingModal from '../EditListingModal';
import CreateBookingPage from '../CreateBookingSection';
import "./ListingDetail.css"


const ListingDetailPage = ({sessionUser}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const currentSessionUser = sessionUser?.id
    // console.log("-----THIS IS LISTING ID", id) 
    const currentListing = useSelector(state => state.listingState.listingData[id])  
    // console.log("THIS IS CURR LISTING", currentListing)

    useEffect(() => {
        dispatch(getAllListings())
        dispatch(getOneListing(id))
    },[dispatch])

    //-------------EDIT AND DELETE SECTION FOR OWNER--------------

    let ownerSection;
    if(currentListing?.userId === currentSessionUser){
        ownerSection=(
            <div className='detail-page-own-section'>
                <h4>Owner Actions:</h4>
                <EditListingModal currentListing={currentListing}/>
                <DeleteListingModal currentListing={currentListing}/>
            </div>
        )
    }

    return(
        <div className='listing-detail-page-container'>

            {currentListing && 
            <>  
                <div>

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
                            <img className='detail-large-img' src={currentListing.img1} alt={currentListing.name}></img>
                        </div>
                        <div className='detail-small-img-div'>
                            <img className='detail-small-img' src={currentListing.img2} alt={currentListing.name}></img>
                            <img className='detail-small-img' src={currentListing.img3} alt={currentListing.name}></img>
                        </div>
                    </div>


                    <div className='detail-page-bottom-div'>
                        <div className='detail-page-left-div'>   
                            <div>
                                {ownerSection}
                            </div>
                            <div>
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
                            </div>
                        </div>

                        <div>
                            <CreateBookingPage currentSessionUser={currentSessionUser} currentListing={currentListing}/>
                        </div>

                    </div>

                </div>

            </>
            
            }
        </div>
    )

}
export default ListingDetailPage