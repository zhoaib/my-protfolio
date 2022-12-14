import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menu = <>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/contact'>Contact me</Link></li>
    </>
    return (
        <div className="navbar bg-base-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Zhoaib</Link>
            </div>
            <div className="navbar-center hidden lg:flex navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;