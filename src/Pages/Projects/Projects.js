import React from 'react';
import color from '../../assets/color.PNG'
import music from '../../assets/music.PNG'
import kena from '../../assets/kena.PNG'

const Projects = () => {
    return (
        <div className='my-20 mx-64 grid lg:grid-cols-3 sm:grid-cols-1 '>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={color} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Color Canvas</h2>
                    <p>* Users can book any package here as they want and see details about the package</p>
                    <p>* Logged in users can see their chosen service and can add reviews and delete them</p>
                    <p>* Users can log in through Google, apply JWT</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mx-auto"><a href="https://color-canvas-2110c.web.app/">Live Site</a></button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={music} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Let the Music Play</h2>
                    <p>* This is an online music course buying site, you can choose any course you want</p>
                    <p>* You need to log in first to see some pages because of Private Routes</p>
                    <p>* Users can download course information in PDF file format</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mx-auto"><a href="https://let-the-music-play-74042.web.app/">Live Site</a></button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={kena} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Kena-Kati</h2>
                    <p>* Buyers and admin can see different dashboards as per their role</p>
                    <p>* Buyers can choose any item and book for themselves</p>
                    <p>* Admin can delete anyone from the site and no one can delete or report admin</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mx-auto"><a href="https://kena-kati.web.app/">Live Site</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;