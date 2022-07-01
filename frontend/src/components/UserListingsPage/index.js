import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllListingsFromOneUser } from '../../store/listing';
import HomePage from '../HomePage'
import "../ListingsPage/ListingsPage.css"
const UserListingsPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const sessionUserId = useSelector(state => state?.session?.user?.id);    
    const allListings = useSelector(state => state.listingState.userListings)  
    const ListingsArr = Object.values(allListings);

    useEffect(()=>{
        dispatch(getAllListingsFromOneUser(sessionUserId))
    },[dispatch])

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
          console.log("ALL LISTINGS EXISTIS",!!ListingsArr)
          sessionLinks = (
            <>
                <div className='listings-container'>
                {ListingsArr.map(({ id, name, price, img1,city,state }) => (
                   <NavLink 
                   style={{ textDecoration: 'none', color: 'black' }} 
                   activeStyle={{ color: 'black' }}
                   to={`/listings/${id}`}>
                       <div className='listing-div'>
                           <img src={img1} alt={name} className='listing-img'></img>
                           <div className='listing-name'>
                               {`${city}, ${state}`}
                           </div>
                           <div className='listing-price'>
                               ${price} night
                           </div>
                       </div>
                   </NavLink>
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