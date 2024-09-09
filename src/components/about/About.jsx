import React from 'react';
import { BsStack } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';
import { GoCodeReview } from 'react-icons/go';
import './about.css'

const About = () => {
    return(
    <section id="about">
        <h2>About Me</h2>
        <div className='container'>
            <div className="about_content">
                <div className='about_cards'>
                    <article className='about_card'>
                        <GiGraduateCap className='about_icon'/>
                        <h5>Education</h5>
                        <small>B.S Computer Science <br/><i>University of Connecticut</i></small>
                    </article>
                    <article className='about_card'>
                        <BsStack className='about_icon'/>
                        <h5>Specialization</h5>
                        <small>Software Design and Development</small>
                    </article>
                    <article className='about_card'>
                        <GoCodeReview className='about_icon'/>
                        <h5>Current Position</h5>
                        <small>Associate Software Engineer <br/><i>The Hartford</i></small>
                    </article>
                </div>

                <p>
                I am a passionate Software Engineer with a strong foundation in both backend and frontend technologies. My journey in software development began at the University of Connecticut, where I earned my Bachelor’s in Computer Science with a focus on Software Development and Design. Since then, I’ve been actively honing my skills and contributing to innovative projects in the tech industry.

                Currently, I’m working at The Hartford as an Associate Software Engineer, where I’ve been enhancing backend functionalities for the Cat HUB application using Java and Spring Boot. My role involves optimizing service performance with AWS technologies, ensuring high-quality code through rigorous testing, and leading daily kanban meetings to keep our projects on track.

                Before this, I gained valuable experience as a Software Engineering Intern at The Hartford, where I worked on API testing, cloud resource provisioning with Terraform, and cloud migration. Additionally, I completed an internship at Sugar Plum Software Solutions, where I contributed to developing an AWS-hosted web application and integrated various functionalities using NodeJS, React, and MongoDB.

                I am well-versed in a variety of programming languages and technologies, including Java, JavaScript, TypeScript, HTML, and Terraform. My experience spans working with databases like MySQL, MongoDB, and DynamoDB, as well as leveraging AWS services such as EC2, S3, and Lambda. I am proficient in frameworks like Spring Boot, Angular, and React, which enable me to build robust and scalable applications.

                I thrive in collaborative environments and am driven by a commitment to continuous learning and improvement. Feel free to connect with me if you’re interested in discussing technology, collaborating on projects, or simply sharing ideas!
                </p>
            </div>
        </div>
    </section>
    )
}

export default About;