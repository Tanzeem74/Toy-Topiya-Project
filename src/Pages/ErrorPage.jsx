import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen space-y-4'>
            <h1 className='text-center text-9xl font-bold'><span>O</span>ops!</h1>
            <h3 className='text-center text-red-500 text-3xl'>404-page not found</h3>
            <Link to={'/'} className='btn bg-teal-700 text-white'>Go to Home Page</Link>
        </div>
    );
};

export default ErrorPage;