import React from "react";
import profilePicture from '../../assets/Profile.png'
import SocialAndResume from "./SocialAndResume";
import './header.css';


const Header = () => {
    return(

        <header id ='home'>
            <div className="container header_container">
                <h1>Arjun Iyer</h1>
                <h5>Software Engineer</h5>
                <SocialAndResume/>
                <div className = "profilePicture">
                    <img src={profilePicture} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header;