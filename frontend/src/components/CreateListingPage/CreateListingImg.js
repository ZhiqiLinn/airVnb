import DemoUserLogin from "../DemoUserBtn"
import { useState, useEffect } from "react";
import createListingImg1 from "../../images/createListingPageImgs/createListingImg1.jpg"
import createListingImg2 from "../../images/createListingPageImgs/createListingImg2.jpg"
import createListingImg3 from "../../images/createListingPageImgs/createListingImg3.jpg"
import createListingImg4 from "../../images/createListingPageImgs/createListingImg4.jpg"
import createListingImg5 from "../../images/createListingPageImgs/createListingImg5.jpg"
import createListingImg6 from "../../images/createListingPageImgs/createListingImg6.jpg"
import createListingImg7 from "../../images/createListingPageImgs/createListingImg7.jpg"


import "./CreateListing.css"

const CreateListingImg = () => {

    const images = [createListingImg1,createListingImg2,createListingImg3,createListingImg4,createListingImg5,createListingImg6,createListingImg7];

    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(currentImg === images.length - 1) {
                setCurrentImg(0);
            } 
            else {
                 setCurrentImg(currentImg + 1);
            }
        }, 1000)
        
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className="creating-Listing-img-container">
                <div  style={{
                    backgroundImage:`url(${images[currentImg]})`,
                    backgroundSize:'cover',
                    transitionDuration:'1s',
                    height:"1000px",
                    width:"800px",
                    zIndex:"-999",
                }}>
                </div>
            </div>
        </>
    )

}

export default CreateListingImg


