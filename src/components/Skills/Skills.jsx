import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import './skills.css'

const Skills = () => {
    return(
        <section id = "skills">
            <h2>Skills</h2>
            <div className="container skills_container">
                <div className="skills_programminglanguages">
                    <h3>Programming Languages</h3>
                    <div className="skills_content">
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>Java</h4>
                        </article>
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>JavaScript/TypeScript</h4>
                        </article>
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>HTML</h4>
                        </article>
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>Terraform</h4>
                        </article>
                    </div>
                </div>
                <div className="skills_databases">
                    <h3>Databases</h3>
                    <div className="skills_content">
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>MySQL</h4>
                        </article>
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>MongoDB</h4>
                        </article>
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>DynamoDB</h4>
                        </article>
                    </div>
                </div>
                <div className="skills_frameworks">
                    <h3>Frameworks</h3>
                    <div className="skills_content">
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>Spring Boot</h4>
                        </article>
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>React</h4>
                        </article>
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>Angular</h4>
                        </article>
                    </div>
                </div>
                <div className="skills_cloud">
                    <h3>Cloud Services</h3>
                    <div className="skills_content">
                        <article className="skills_details">
                            <BsFillPatchCheckFill className="skills_details_icon"/>
                            <h4>AWS <br/><i>&emsp;- EC2</i> <br/><i>&emsp;- Lambda</i> <br/><i>&emsp;- S3</i></h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills

