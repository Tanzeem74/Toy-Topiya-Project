import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.\
            toast('You Logged Out');
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    const links = <>
        <NavLink to='/'><li className='mr-4 text-black font-semibold'>Home</li></NavLink>
        <NavLink to='/all-toys'><li className='mr-4 text-black font-semibold'>Explore Items</li></NavLink>
        <NavLink to='/profile'><li className='mr-4 text-black font-semibold'>My Profile</li></NavLink>
    </>
    return (
        <div className=''>
            <div className="navbar bg-emerald-300  shadow-sm p-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl text-secondary font-bold">ToyTopia</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-3 items-center'>
                        <Link to='/profile'><img className='rounded-full h-8 w-8' src={`${user? user?.photoURL:userImg}`} alt="user" /></Link>
                        {user ? <button onClick={handleLogout} className="btn bg-secondary text-white">Logout</button> : <Link to='/auth/login' className="btn bg-primary text-white">Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;