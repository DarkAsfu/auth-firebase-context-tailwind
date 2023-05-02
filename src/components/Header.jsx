import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleSignout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='bg-stone-300'>
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-5 md:mt-3 p-4  shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/orders">Orders</Link></li>
                            {
                                user &&
                                <li><Link to="/profile">Profile</Link></li>
                            }
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Firebase Auth</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        {
                            user &&
                            <li><Link to="/profile">Profile</Link></li>
                        }
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='md:flex items-center gap-3'><p>{user.email}</p><button onClick={handleSignout} className='btn btn-primary'>SignOut</button></div> : <button className='btn btn-primary'><Link to="/login">SignIn</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;