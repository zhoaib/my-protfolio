import React from 'react';
import l1 from '../../assets/l1.PNG'
import l2 from '../../assets/l2.PNG'
import music from '../../assets/music.PNG'

const LetTheMusicPlay = () => {
    return (
        <div className='my-10'>
            <p className='text-3xl font-bold text-center my-5'>Let The Music Play</p>
            <div className="card card-compact bg-base-100 shadow-xl mx-auto">
                <div className='grid grid-cols-3 gap-10'>
                    <figure><img src={music} alt="Shoes" /></figure>
                    <figure><img src={l1} alt="Shoes" /></figure>
                    <figure><img src={l2} alt="Shoes" /></figure>
                </div>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">Let The Music Play</h2>
                    <p>* This is an online music course buying site, you can choose any course you want</p>
                    <p>* You need to log in first to see some pages because of Private Routes</p>
                    <p>* Users can download course information in PDF file format</p>
                    <p>* I use bootstrap and vanilla CSS for this project</p>
                    <p>* It is a online Music course site , where you can learn many instrument</p>
                    <p>* You can login in this site in 3 ways</p>
                    <p>* User will get an error message fi they do not give the proper information</p>
                    <p>* Protected routes are user in this site</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mx-auto "><a href="https://let-the-music-play-74042.web.app/">Live Site</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetTheMusicPlay;