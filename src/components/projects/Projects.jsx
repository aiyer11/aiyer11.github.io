import React from "react";
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import './projects.css';

const Projects = () => {
    return(
        <section id='projects'>
            <h2>Projects</h2>
            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={project1} alt=""/>
                    </div>
                    <h3>Chip-8 Emulator</h3>
                    <small className="text-light">Java</small>
                    <div className="portfolio_item_link">
                        <a href="https://github.com/aiyer11/chip-8-emulator" target="_blank" rel="noreferrer" className="btn">Github</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={project2} alt=""/>
                    </div>
                    <h3>LeetCode 150 Solutions</h3>
                    <small className="text-light">Java</small>
                    <div className="portfolio_item_link">
                        <a href="https://github.com/aiyer11/LeetCode150Solutions" target="_blank" rel="noreferrer" className="btn">Github</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={project3} alt=""/>
                    </div>
                    <h3>My Portfolio (Here!)</h3>
                    <small className="text-light">ReactJs</small>
                    <div className="portfolio_item_link">
                        <a href="https://github.com/aiyer11/aiyer11.github.io" target="_blank" rel="noreferrer" className="btn">Github</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects;