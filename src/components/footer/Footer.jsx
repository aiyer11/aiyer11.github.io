import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <footer>
            <a href="/" className='footer_logo'>ARJUN IYER</a>
            <ul className='permalinks'>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>

            <div className='footer_socials'>
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                    <a  href="https://www.linkedin.com/in/arjuniyer11/" target='_blank' rel="noreferrer"><BsLinkedin size={35}/></a>
                    <a  href="https://github.com/aiyer11" target='_blank' rel="noreferrer"><BsGithub size={35}/></a>
                </IconContext.Provider>
            </div>
        </footer>
    )
}

export default Footer;