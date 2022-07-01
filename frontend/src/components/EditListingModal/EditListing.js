import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editOneListing, getAllListings } from "../../store/listing";
// import { getOneListing } from "../store/listing";
// import ErrorMessage from "./ErrorMessage";

const EditListingPage = ({currentListing, hideForm}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(currentListing.name);
    const [about, setAbout] = useState(currentListing.about);
    const [city, setCity] = useState(currentListing.city);
    const [state, setState ] = useState(currentListing.state);
    const [price, setPrice] = useState(`${currentListing.price}`);
    const [serviceFee, setServiceFee] = useState(`${currentListing.serviceFee}`);
    const [img1, setImg1] = useState(currentListing.img1);
    const [img2, setImg2] = useState(currentListing.img2);
    const [img3, setImg3] = useState(currentListing.img3);

    const [hasSubmitted, setHasSubmitted] = useState(false);
    const currentSessionUser = useSelector(state => state.session.user.id)
    
    // console.log("----THIS IS CURRENT SESSION USER ID ", currentSessionUser)

    // useEffect(() => {
    //     console.log("CURRENTLISTING", currentListing.name)
    // }, [currentListing]);

    useEffect(() => {
        dispatch(getAllListings());
      }, [dispatch]);

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
    let editedListing;
    function handleSubmit(e) {
        e.preventDefault();
        // setHasSubmitted(true);
        setHasSubmitted(true);
        const payload = {
            id:currentListing.id,
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
        editedListing =  dispatch(editOneListing(payload))

        if(editedListing && !errors.length) {
            reset();
            setHasSubmitted(false);
            hideForm();
            history.push(`/listings/${currentListing.id}`);
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
        hideForm();
        history.push(`/listings/${currentListing.id}`);
    };


    return(
        <div className='edit-listing-form-container'>
            <h2 className="edit-listing-title">Edit Your Listing</h2>
            <hr></hr>
            { hasSubmitted && errors &&
                <div>
                    {errors.map((error, idx) => <p className='error-text' key={idx}>* {error}</p>)}
                </div>
            }

                <form className='listing-form' onSubmit={handleSubmit}>
                    <div className="edit-form-div">
                        <label>
                            Title:
                            <br></br>
                            <input
                                className="edit-input"
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
                                className="edit-input"
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
                                className="edit-input"
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
                            <input
                                className="edit-input"
                                placeholder="STATE"
                                type='text'
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </label>
                        <br></br>
                        <h3>Upload Images For Your Listing</h3>
                        <label>
                            Price ($/day):
                            <br></br>
                            <input
                                className="edit-input"
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
                                className="edit-input"
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
                                className="edit-input"
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
                                className="edit-input"
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
                                className="edit-input"
                                placeholder="IMAGE 3 (OPTIONAL)"
                                type='text'
                                value={img3}
                                onChange={(e) => setImg3(e.target.value)}
                            />
                            
                        </label>
                        <br></br>
                    </div>
                        <hr></hr>
                    <div className='edit-listing-form-btns-div'>
                        <button className="edit-listing-btn btn-hov" type='submit'>
                            Submit Listing
                        </button>
                        <button className="edit-listing-btn btn-hov" type='button' onClick={handleCancelClick}>
                            Cancel Listing
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default EditListingPage;