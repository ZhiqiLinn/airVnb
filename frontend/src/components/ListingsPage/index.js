import { Route, Switch, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllListings } from '../../store/listing';

const ListingsPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allListings = useSelector(state => state.listingState.listingData)
    console.log("---------THIS IS ALL LISTINGS FROM ListingPage COMPONENT", allListings)
    
    useEffect(()=>{
        dispatch(getAllListings())
    },[])

    const linkToPosting = () => {
        history.push('/listings/new')
    }
    return(
        <>
            <div>
                <button onClick={linkToPosting}>
                    POST YOUR LISTING
                </button>
            </div>
            <div>
            {Object.values(allListings).map(({ id, name, img1 }) => (
                <div>
                    <img src={img1} alt={name}></img>
                    <li key={id}><NavLink to={`/listings/${id}`}>{name}</NavLink></li>
                </div>
            ))}
            </div>
        </>
    )
}

export default ListingsPage