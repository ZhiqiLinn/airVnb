import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllListingsFromOneUser } from '../../store/listing';
import HomePage from '../HomePage'
import "../ListingsPage/ListingsPage.css"
import EditListingModal from '../EditListingModal';
import DeleteListingModal from '../DeleteListingModal';
const UserListingsPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const sessionUserId = sessionUser?.id
    const allListings = useSelector(state => state.listingState.userListings)  
    const ListingsArr = Object.values(allListings);

    useEffect(()=>{
        dispatch(getAllListingsFromOneUser(sessionUserId))
    },[dispatch,sessionUserId])

    //--------------WHEN SESSION USER IS NOT EXISTS-------------------------
    let sessionLinks;
    if (!sessionUser) {
      sessionLinks = (
        <>
          <HomePage />
          
        </>
      );
    }
    //--------------WHEN SESSION USER EXISTS BUT DOESNT HAVE ANY LISTINGS----------
      if(ListingsArr.length){
          sessionLinks = (
            <>
                <div className='listings-container'>
                {ListingsArr.map((listing) => (
                  <div className='listing-div'>
                   <NavLink 
                   style={{ textDecoration: 'none', color: 'black' }} 
                   activeStyle={{ color: 'black' }}
                   to={`/listings/${listing.id}`}>
                       <div>
                           <img src={listing.img1} alt={listing.name} className='listing-img'></img>
                          </div>
                   </NavLink>
                      <div className='listing-name'>
                          {`${listing.city}, ${listing.state}`}
                      </div>
                      <div className='listing-price'>
                          ${listing.price} night
                      </div>
                      <br></br>
                      <EditListingModal currentListing={listing}/>
                      <DeleteListingModal currentListing={listing} />
                  </div>
                ))}
                </div>
            </>
          )
        }else{

          sessionLinks = (
          <>
            <h1>You have no listing posted.</h1>
          </>
        )}
     return(
         <>
         {sessionLinks}
         </>
     )
 }
 export default UserListingsPage;