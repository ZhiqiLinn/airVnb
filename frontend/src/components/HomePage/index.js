import DemoUserLogin from "../DemoUserBtn"
import splash1 from "../../images/splash1.jpg";
import splash2 from "../../images/splash2.jpg";
import splash3 from "../../images/splash3.jpg";
import splash4 from "../../images/splash4.jpg";
import splash5 from "../../images/splash5.jpg";
import { useState, useEffect } from "react";
import "./HomePage.css"

const HomePage = () => {

    const images = [splash1,splash2,splash3,splash4,splash5];

    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(currentImg === images.length - 1) {
                setCurrentImg(0);
            } 
            else {
                 setCurrentImg(currentImg + 1);
            }
        }, 5000)
        
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className="home-page-img-container">
                <div  style={{
                    backgroundImage:`url(${images[currentImg]})`,
                    backgroundSize:'cover',
                    transitionDuration:'1s',
                    height:"800px",
                    width:"1200px",
                    zIndex:"-999",
                    margin:"5% 10% 5% 10%",
                    borderRadius:"20px"
                }}>
                    <div className="home-page-demo-user">
                        <DemoUserLogin />
                    </div>
                </div>
            <p className="copy-right">© Copyright 2022 Zhiqi Lin @appAcademy</p>
            </div>
        </>
    )

}

export default HomePage


