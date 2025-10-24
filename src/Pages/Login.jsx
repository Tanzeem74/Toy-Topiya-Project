import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router';

const Login = () => {
    useEffect(() => {
        document.title = "Login";
    }, []);
    const [show, setShow] = useState(false);
    const handleTogglePass = (e) => {
        e.preventDefault();
        setShow(!show);
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login to your account</h2>
                <form className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <div className='relative'>
                            <label className="label">Password</label>
                            <input name='password'
                                type={show ? 'text' : 'password'}
                                className="input" placeholder="Password" required />
                            <button
                                onClick={handleTogglePass}
                                className='btn btn-sm absolute top-6 right-5'>
                                {show ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center'>or</p>
                        <button className='btn btn-outline btn-secondary w-full'> <FcGoogle size={25} /> Login with Google</button>
                        <p className='font-semibold text-center mt-4'>Don't have an account? <Link className='text-red-500' to='/auth/register' >Register</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;