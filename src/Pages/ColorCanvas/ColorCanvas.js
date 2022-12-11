import React from 'react';
import cp from '../../assets/cp.PNG'
import clog from '../../assets/clog.PNG'

const ColorCanvas = () => {
    return (
        <div className='my-10'>
            <p className='text-3xl font-bold text-center my-5'>COLOR CANVAS</p>
            <div className="card card-compact bg-base-100 shadow-xl mx-auto">
                <div className='grid grid-cols-2 gap-10'>
                    <figure><img src={cp} alt="Shoes" /></figure>
                    <figure><img src={clog} alt="Shoes" /></figure>
                </div>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">Color Canvas</h2>
                    <p>* Users can book any package here as they want and see details about the package</p>
                    <p>* Logged in users can see their chosen service and can add reviews and delete them</p>
                    <p>* Users can log in through Google, apply JWT</p>
                    <p>* This a wedding photographer project where you can buy offered services</p>
                    <p>* This site is made with reactJs</p>
                    <p>* I use tailwind css and daisyui for this project</p>
                    <p>* You can sign in with your social accounts</p>
                    <p>* Some private routes have been made in this projects</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mx-auto "><a href="https://color-canvas-2110c.web.app/">Live Site</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorCanvas;