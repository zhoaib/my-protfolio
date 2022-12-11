import React from 'react';
import useTitle from '../../hooks/UseTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className="text-5xl font-bold">Coming Soon!!!</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;