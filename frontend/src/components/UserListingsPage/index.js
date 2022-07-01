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

    useEffect(()=>{
        dispatch(getAllListingsFromOneUser(sessionUserId))
    },[dispatch])

    
    //--------LINK TO POST LISTING WHEN SESSION USER EXISTS---------

    const linkToPosting = () => {
        history.push('/listings/new')
    }


     //-------------------CHECK IF AS SESSION USER EXISTS--------------------------
     let sessionLinks;
     if (sessionUser) {
       sessionLinks = (
         <>
             <h1>THIS IS USER LISTING PAGE</h1>
             <div>
             <button onClick={linkToPosting}>
                 POST YOUR LISTING
             </button>
         </div>
             <div className='listings-container'>
             {Object.values(allListings).map(({ id, name, price, img1,city,state }) => (
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
       )}else {
         sessionLinks = (
           <>
             <HomePage />
             
           </>
         );
       }
     return(
         <>
         {sessionLinks}
         </>
     )
 }
 export default UserListingsPage;