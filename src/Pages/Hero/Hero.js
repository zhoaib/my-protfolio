import React from 'react';
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
                        <p className="mb-5 font-bold text-xl">My technical skills include using Programming languages such as JavaScript, HTML, CSS,
                            XML, and React. I also know about MongoDB, firebase. My daily routine includes practicing
                            developing a user-friendly UI and a secure website.</p>
                        <a target='_blank' href="https://drive.google.com/file/d/1xSbXErOV6mFda6fkrxQ4QLhy7o8tQZJy/view?usp=sharing">
                            <button className="btn btn-primary">Resume</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;