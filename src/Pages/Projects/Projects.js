import React from 'react';
import color from '../../assets/color.PNG'
import music from '../../assets/music.PNG'
import kena from '../../assets/kena.PNG'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/UseTitle';

const Projects = () => {
    useTitle('Projects')
    return (
        <div>
            <div>
                <h1 className='text-3xl mt-20 text-center'>Projects__</h1>
            </div>
            <div className='my-20 grid lg:grid-cols-3 sm:grid-cols-1 gap-10 '>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={color} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Color Canvas</h2>
                        <p>* Users can book any package here as they want and see details about the package</p>
                        <p>* Logged in users can see their chosen service and can add reviews and delete them</p>
                        <p>* Users can log in through Google, apply JWT</p>
                        <div className="card-actions mx-auto">
                            <button className="btn btn-primary "><a href="https://color-canvas-2110c.web.app/">Live Site</a></button>
                            <Link to='/colorcanvas'><button className="btn btn-primary ">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={music} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Let the Music Play</h2>
                        <p>* This is an online music course buying site, you can choose any course you want</p>
                        <p>* You need to log in first to see some pages because of Private Routes</p>
                        <p>* Users can download course information in PDF file format</p>
                        <div className="card-actions mx-auto ">
                            <button className="btn btn-primary "><a href="https://let-the-music-play-74042.web.app/">Live Site</a></button>
                            <Link to="/music"><button className="btn btn-primary ">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={kena} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kena-Kati</h2>
                        <p>* Buyers and admin can see different dashboards as per their role</p>
                        <p>* Buyers can choose any item and book for themselves</p>
                        <p>* Admin can delete anyone from the site and no one can delete or report admin</p>
                        <div className="card-actions mx-auto">
                            <button className="btn btn-primary "><a href="https://kena-kati.web.app/">Live Site</a></button>
                            <Link to='/kenakati'><button className="btn btn-primary ">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;