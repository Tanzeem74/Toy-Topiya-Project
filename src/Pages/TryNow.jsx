import React from 'react';
import { toast } from 'react-toastify';

const TryNow = () => {
    const handleTryNow = () => {
        toast('Submitted');
    }
    return (
        <div>
            <div className='container mx-auto flex flex-col justify-center items-center my-5'>
                <h2 className='text-blue-500 font-semibold text-2xl my-3'>Wants to know about us more? than try now !</h2>
                <div className="card bg-blue-300 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleTryNow} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" required />
                            <label className="label">Name</label>
                            <input type="name" className="input" placeholder="Name" required />
                            <button type='submit' className="btn btn-neutral mt-4">Try now</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TryNow;