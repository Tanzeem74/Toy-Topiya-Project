import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register an account</h2>
                <form className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Your Name" required />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="Text" className="input" placeholder="Photo URL" required />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center'>or</p>
                        <button className='btn btn-outline btn-secondary w-full'> <FcGoogle size={25} /> Signup with Google</button>
                        <p className='font-semibold text-center mt-4'>Already have an account? <Link className='text-blue-500' to='/auth/login' >Login</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;