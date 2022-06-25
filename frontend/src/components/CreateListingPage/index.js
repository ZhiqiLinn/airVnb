import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createOneListing } from "../../store/listing";
// import { getOneListing } from "../store/listing";
// import ErrorMessage from "./ErrorMessage";

const CreateListingPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [city, setCity] = useState('');
    const [state, setState ] = useState('');
    const [price, setPrice] = useState('0');
    const [serviceFee, setServiceFee] = useState('0');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const currentSessionUser = useSelector(state => state.session.user.id)

    console.log("----THIS IS CURRENT SESSION USER ID ", currentSessionUser)
    useEffect( () => {
        let errors = []
        if (!name.length) errors.push("Name is required");
        if (!about.length) errors.push("Description is required");
        if (!city.length) errors.push("City is required");
        if (!state.length) errors.push("State is required");
        if (!price.length) errors.push("Price is required");
        if (!serviceFee.length) errors.push("Service Fee is required");
        if (!img1) errors.push("Minium of one image is required");
        setErrors(errors);
    }, [name, about, city, state, price, serviceFee, img1]);


    const handleSubmit = e => {
        e.preventDefault();
        
        setHasSubmitted(true);
        if (errors.length) return alert(`Cannot Submit`);
    
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
        dispatch(createOneListing(payload))
        reset();
        setHasSubmitted(false);
        history.push('/')
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
        <div className='listing-form-container'>
            <h1>Welcome!</h1>
            { hasSubmitted && errors &&
                <div>
                    {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                </div>
            }
            <form className='listing-form' onSubmit={handleSubmit}>
                
                <h2>Tell Us About Your Listing</h2>
                <label>
                    Title:
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br></br>
                <label>
                    Description:
                    <input
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
                    <input
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                <br></br>
                <label>
                    State:
                    <input
                        type='text'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </label>
                <br></br>
                <h3>Upload Images For Your Listing</h3>
                <label>
                    Price
                    <input
                        type='text'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    $/day
                </label>
                <br></br>
                <label>
                    Service Fee:
                    <input
                        type='text'
                        value={serviceFee}
                        onChange={(e) => setServiceFee(e.target.value)}
                        required
                    />
                    $/day
                </label>
                <br></br>
                <h3>Upload images for your listing:</h3>
                <label>
                    Image 1 (Required):
                    <input
                        type='text'
                        value={img1}
                        onChange={(e) => setImg1(e.target.value)}
                        required
                    />
                </label>
                <br></br>
                <label>
                    Image 2 (Optional):
                    <input
                        type='text'
                        value={img2}
                        onChange={(e) => setImg2(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Image 3 (Optional):
                    <input
                        type='text'
                        value={img3}
                        onChange={(e) => setImg3(e.target.value)}
                    />
                     
                </label>
                <br></br>
                <div className='listing-form-btns-div'>
                    <button className="btn"type='submit'>
                        Submit Listing
                    </button>
                    <button className="btn"type='button' onClick={handleCancelClick}>
                        Cancel Listing
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateListingPage;