import React from 'react';
import './header.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Resume from '../../assets/Resume.pdf'
import { IconContext } from 'react-icons';

const SocialAndResume = () => {
    return(
       
        <div className="socials">
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                <a  href="https://www.linkedin.com/in/arjuniyer11/" target='_blank' rel="noreferrer"><BsLinkedin size={45}/></a>
                <a  href="https://github.com/aiyer11" target='_blank' rel="noreferrer"><BsGithub size={45}/></a>
            </IconContext.Provider>
            <a href={Resume} download className='btn'>Resume</a>
        </div>
    )
}

export default SocialAndResume;
