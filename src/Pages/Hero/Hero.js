import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../assets/3.png"

const Hero = () => {
    return (
        <div>
            <div className="hero " >
                <img className='w-1/3' src={img1} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link><button className="btn btn-primary">View Resume</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;