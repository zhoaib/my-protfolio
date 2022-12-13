import React from 'react';
import k1 from '../../assets/k1.PNG'
import k2 from '../../assets/k2.PNG'
import k3 from '../../assets/k3.PNG'

const KenaKati = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='my-10'>
            <p className='text-3xl font-bold text-center my-5'>KENA_KATI</p>
            <div className="card card-compact bg-base-100 shadow-xl mx-auto">
                <div className='grid grid-cols-3 gap-10'>
                    <figure><img src={k1} alt="Shoes" /></figure>
                    <figure><img src={k2} alt="Shoes" /></figure>
                    <figure><img src={k3} alt="Shoes" /></figure>
                </div>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">Kena-Kati</h2>
                    <p>* Buyers and admin can see different dashboards as per their role</p>
                    <p>* Buyers can choose any item and book for themselves</p>
                    <p>* Admin can delete anyone from the site and no one can delete or report admin</p>
                    <p>* This project is made with react js</p>
                    <p>* All the routes are dynamic in this site</p>
                    <p>* Data used from MongoDB</p>
                    <p>* Admin and other user can see different things</p>
                    <p>* Highly secured Admin route</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mx-auto "><a href="https://kena-kati.web.app/">Live Site</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KenaKati;