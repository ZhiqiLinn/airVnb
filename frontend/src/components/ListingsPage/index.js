import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllListings } from '../../store/listing';
import './ListingsPage.css'

const ListingsPage = ({sessionUser}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // console.log('---------THIS IS ALL LISTINGS FROM ListingPage COMPONENT', allListings)
    // console.log('----THIS IS CURRENT SESSION USER ID ', currentSessionUser)
    const allListings = useSelector(state => state.listingState.listingData)  

    useEffect(()=>{
        dispatch(getAllListings())
    },[dispatch])

    
    //--------LINK TO POST LISTING WHEN SESSION USER EXISTS---------

    const linkToPosting = () => {
        history.push('/listings/new')
    }

    let postButton;
    if (sessionUser){
        postButton =(
            <div className='listing-post-btn'>
            <button onClick={linkToPosting}>
                POST YOUR LISTING
            </button>
        </div>
        )
    }
    //--------------------------------------------------------------
    
    return(
        <>
            <div className='listings-container'>
            {Object.values(allListings).map(({ id, name, price, img1,city,state }) => (
                <Link 
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
                </Link>
            ))}
            </div>
        </>
    )
}

export default ListingsPage;