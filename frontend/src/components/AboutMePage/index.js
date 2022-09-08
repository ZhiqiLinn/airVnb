import renaPhoto from "../../images/rena1.PNG";
import logo from "../../images/logo.png";
import './AboutMe.css'

const AboutMePage = () => {
    return(
        <>
            <section id="about">  
            <div className="introduce-me-container">
                <div>
                    <img className="rena-img" src={renaPhoto} alt="Profile Picture">
                    </img>
                </div>
                <div className="introduce-me">
                    <h1>About Me</h1>
                    <p>
                        My name is Zhiqi Lin, perferred to be called by Rena ❤️ 
                    </p>
                    <hr></hr>
                    Visit Me By:
                    <ul >
                        <li>
                            <a className="about-anchor" target="_blank" href="https://www.linkedin.com/in/zhiqi-linn/">                     
                                <i className="fa-brands fa-linkedin"></i>
                                    {` LinkedIn`}
                            </a> 
                        </li>
                        <li>
                            <a className="about-anchor" target="_blank" href="https://github.com/ZhiqiLinn"> 
                                <i className="fa-brands fa-github"></i>
                                {` Github`}
                            </a>
                        </li>
                        <li>
                            <a className="about-anchor" target="_blank" href="mailto:zhiqilinn@gmail.com"> 
                                <i className="fa-solid fa-envelope"></i>
                                {` Email: ZhiqiLinn@gmail.com`} 
                            </a>
                        </li>
                    </ul>
                    <hr></hr>
                    <p>
                        I am a fullstack software engineer student recently graduated from App Academy, successfully built several web development projects in a fast paced environment. With two years previous experiences in project management within a large general contracting company before I started coding. I descirbed myself as a well-organized, diligent and passionate person who is looking to explore more about software and web development fields. 
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className='introduce-airvnb'> 
                <div>
                    <h1>About Airvnb</h1>
                    <p>AarVnb is a clone web application inspired by Airbnb, that provides an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities.
                    </p>
                    <div>
                        <span style={{fontWeight:"bold"}}>Built With:</span>
                        <br></br>
                            JavaScript
                        <br></br>
                            Postgresql
                        <br></br>
                            Sequelize
                        <br></br>
                            Express
                        <br></br>
                            React
                        <br></br>
                            Redux

                    </div>
                </div>
                </div>
                    <hr></hr>
                <p className="introduce-footer">If you love this web application, remember to hire Rena :)</p>
            </section>
        </>
    )
}
export default AboutMePage