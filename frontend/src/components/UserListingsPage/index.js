import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllListingsFromOneUser } from '../../store/listing';
import "../ListingsPage/ListingsPage.css"
const UserListingsPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUserId = useSelector(state => state?.session?.user?.id);    
    const allListings = useSelector(state => state.listingState.userListings)  

    useEffect(()=>{
        dispatch(getAllListingsFromOneUser(sessionUserId))
    },[dispatch])

    
    //--------LINK TO POST LISTING WHEN SESSION USER EXISTS---------

    const linkToPosting = () => {
        history.push('/listings/new')
    }


    //--------------------------------------------------------------
    
    return(
        <>
            <h1>THIS IS USER LISTING PAGE</h1>
            <div>
            <button onClick={linkToPosting}>
                POST YOUR LISTING
            </button>
        </div>
            <div className='listings-container'>
            {Object.values(allListings).map(({ id, name, img1 }) => (
                <div>
                    <img src={img1} alt={name}></img>
                    <NavLink to={`/listings/${id}`}>{name}</NavLink>
                </div>
            ))}
            </div>
        </>
    )
}

export default UserListingsPage;