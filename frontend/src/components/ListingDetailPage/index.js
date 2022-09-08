
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllListings, getOneListing } from '../../store/listing';
import DeleteListingModal from '../DeleteListingModal';
import EditListingModal from '../EditListingModal';
import CreateBookingPage from '../CreateBookingSection';
import ReviewsSection from '../ReviewsSection';
import { getAllUsers } from '../../store/session';
import CreateReviewModal from '../CreateReviewModal'
import "./ListingDetail.css"


const ListingDetailPage = () => {
    const sessionUser = useSelector(state => state.session.user);    

    const dispatch = useDispatch();
    const {id} = useParams();
    const currentSessionUser = sessionUser.id
    // console.log("-----THIS IS LISTING ID", id) 
    const currentListing = useSelector(state => state.listingState.listingData[id]) 
    // console.log("THIS IS CURR LISTING", currentListing)
    
    //-------------FIND OWNER INFO -------------------
    const users = Object.values(useSelector(state => state.session)); 
    const findUser = (userId) => {
        let result = users.filter(user => user.id === userId);
        console.log(result)
        return result[0]
    }


    useEffect(() => {
        dispatch(getAllListings())
        dispatch(getAllUsers())

    },[dispatch])

    

    //-------------EDIT AND DELETE SECTION FOR OWNER--------------

    let ownerSection;
    if(currentListing?.userId === currentSessionUser){
        ownerSection=(
            <div>
                <h4>Owner Actions:</h4>
                <div className='detail-page-own-section'>
                    <EditListingModal currentListing={currentListing}/>
                    <DeleteListingModal currentListing={currentListing}/>
                </div>
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
                        <p style={{fontSize:"small"}}>
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
                                        <h4><i className="fa-solid fa-key"></i> Self check-in</h4>
                                    </div>
                                    <div>
                                        <h4><i className="fa-solid fa-calendar-xmark"></i> Free cancellation for 48 hours.</h4>
                                    </div>
                                </div>
                                    <hr></hr>
                                <div className='detail-page-listing-about'>
                                        <h4><i className="fa-solid fa-house"></i> About</h4>
                                        <p>{currentListing.about}</p>
                                </div>
                                    <hr></hr>
                                <div className='detail-page-listing-amenties'>
                                        <h4><i className="fa-solid fa-bed"></i> What this place offers</h4>
                                            Air conditioning
                                            <br></br>
                                            Security cameras on property
                                            <br></br>
                                            Bathroom Essential
                                            <br></br>
                                            Wifi
                                            
                                </div>
                            </div>
                        </div>

                        <div>
                            <CreateBookingPage currentSessionUser={currentSessionUser} currentListing={currentListing}/>
                        </div>

                    </div>
                    <hr></hr>
                    <div>
                        <ReviewsSection currentListing={currentListing} users={users} sessionUser={sessionUser}/>

                    </div>
              
                    <div>
                        
                    </div>

                </div>
                
            </>
            
        }
        </div>
    )

}
export default ListingDetailPage