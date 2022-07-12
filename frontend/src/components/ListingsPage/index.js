import { NavLink} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllListings } from '../../store/listing';
import './ListingsPage.css'

const ListingsPage = () => {
    const dispatch = useDispatch();
    // console.log('---------THIS IS ALL LISTINGS FROM ListingPage COMPONENT', allListings)
    // console.log('----THIS IS CURRENT SESSION USER ID ', currentSessionUser)
    const allListings = useSelector(state => state.listingState.listingData)  

    useEffect(()=>{
        dispatch(getAllListings())
    },[dispatch])

    
    //--------------------------------------------------------------
    
    return(
        <>
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
                        <div style={{fontSize:"small", color:"grey"}}>
                            {name}
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
}

export default ListingsPage;