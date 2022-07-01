import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { createOneListing } from "../../store/listing";
import CreateListingImg from "./CreateListingImg";

import "./CreateListing.css"
const CreateListingPage = ({sessionUser}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [city, setCity] = useState('');
    const [state, setState ] = useState('');
    const [price, setPrice] = useState('');
    const [serviceFee, setServiceFee] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const currentSessionUser = sessionUser.id

    // console.log("----THIS IS CURRENT SESSION USER ID ", currentSessionUser)
    const statesSelections = ['','AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

        //-----------------ERROR HANDLING----------------------------
    useEffect( () => {
        let errors = []
        if (name.length <= 3) errors.push("Name should have at least 3 characters");
        if (about.length <= 10 || about.length >= 1000) errors.push("Description length should between 10 to 1000 characters");
        if (!city.length) errors.push("City is required");
        if (state.length !== 2 ) errors.push("State is required");
        if (!/^\d+$/.test(price)) errors.push("Price is required and should be in number");
        if (!/^\d+$/.test(serviceFee)) errors.push("Service Fee is required and should be in number");
        if (!img1) errors.push("Minimum of one image is required");
        setErrors(errors);
    }, [name, about, city, state, price, serviceFee, img1]);
    
    //-----------------DISPATCHING ACTION AND HANDLE SUBMIT----------------------
    let createdListing;
    const handleSubmit = e => {
        e.preventDefault();
        
        setHasSubmitted(true);
    
        const payload = {
            userId:currentSessionUser,
            name,
            about,
            city,
            state,
            price,
            serviceFee,
            img1,
            img2,
            img3

        };
        createdListing = dispatch(createOneListing(payload))
  
        // window.open('/listings','_self')
        if(createdListing && !errors.length) {
            reset();
            setHasSubmitted(false);
            history.push(`/users/listings`);
        }
      }
    const reset = () => {
        setName('');
        setAbout('');
        setCity('');
        setState('');
        setPrice('');
        setServiceFee('');
        setImg1('');
        setImg2('');
        setImg3('');
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        setErrors({});
        history.push(`/listings`);
    };


    return(
        <div>
            <div className='listing-form-container'>
                <div>
                    <CreateListingImg />
                </div>
                <div className="listing-form-img">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Open your door</h1>
                    <h1>to hosting!</h1>
                    <h1>↓</h1>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <h1>Welcome!</h1>
                { hasSubmitted && errors &&
                    <div>
                        {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                    </div>
                }
                <form onSubmit={handleSubmit}>
                    
                    <h2>Tell Us About Your Listing</h2>
                    <label>
                                Title:
                                <br></br>
                                <input
                                    className="create-listing-input"
                                    placeholder="TITLE"
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </label>
                            <br></br>
                            <label>
                                Description:
                                <br></br>
                                <input
                                    className="create-listing-input"
                                    placeholder="DESCRIPTION"
                                    type='text'
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                    required
                                />
                            </label>
                            <br></br>
                            <h3>Confirm Your Listing Location:</h3>
                            <label>
                                City:
                                <br></br>
                                <input
                                    className="create-listing-input"
                                    placeholder="CITY"
                                    type='text'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </label>
                            <br></br>
                            <label>
                                State:
                                <br></br>
                                <select 
                                    onChange={(e) => setState(e.target.value)} 
                                    value={state}
                                    className="create-listing-input"
                                    >
                                    {statesSelections.map(type =>
                                        <option key={type}>{type}</option>
                                    )}
                                </select>
                            </label>
                            <br></br>
                            <h3>Upload Images For Your Listing</h3>
                            <label>
                                Price ($/day):
                                <br></br>
                                <input
                                    className="create-listing-input"
                                    placeholder="PRICE"
                                    type='text'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </label>
                            <br></br>
                            <label>
                                Service Fee ($/day):
                                <br></br>
                                <input
                                    className="create-listing-input"
                                    placeholder="SERVICE FEE"
                                    type='text'
                                    value={serviceFee}
                                    onChange={(e) => setServiceFee(e.target.value)}
                                    required
                                />
                            </label>
                            <br></br>
                            <h3>Upload images for your listing:</h3>
                            <label>
                                Image 1 (Required):
                                <br></br>
                                <input
                                    className="create-listing-input"
                                    placeholder="IMAGE 1 (REQUIRED)"
                                    type='text'
                                    value={img1}
                                    onChange={(e) => setImg1(e.target.value)}
                                    required
                                />
                            </label>
                            <br></br>
                            <label>
                                Image 2 (Optional):
                                <br></br>
                                <input
                                    className="create-listing-input"
                                    placeholder="IMAGE 2 (OPTIONAL)"
                                    type='text'
                                    value={img2}
                                    onChange={(e) => setImg2(e.target.value)}
                                />
                            </label>
                            <br></br>
                            <label>
                                Image 3 (Optional):
                                <br></br>
                                <input
                                    className="create-listing-input"
                                    placeholder="IMAGE 3 (OPTIONAL)"
                                    type='text'
                                    value={img3}
                                    onChange={(e) => setImg3(e.target.value)}
                                />
                                
                            </label>
                    <br></br>
                    <div className='listing-form-btns-div'>
                        <button className="btn"type='submit' >
                                Submit Listing
                        </button>
                        <button className="btn"type='button' onClick={handleCancelClick}>
                            Cancel Listing
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateListingPage;