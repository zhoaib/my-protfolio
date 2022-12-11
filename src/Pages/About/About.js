import React from 'react';
import { Link } from 'react-router-dom';
import a2 from '../../assets/2.png'
import useTitle from '../../hooks/UseTitle';

const About = () => {
    useTitle('About')
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={a2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Zhoaib Hassan</h1>
                        <p className="py-6">My technical skills include using Programming languages such as JavaScript, HTML, CSS,
                            XML, and React. I also know about MongoDB, firebase. My daily routine includes practicing
                            developing a user-friendly UI and a secure website. I established a secure web application and developed a back-end database to
                            systematize the confidential survey process.</p>
                        <Link to='/contact'><button className="btn btn-primary">Contact Me</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;