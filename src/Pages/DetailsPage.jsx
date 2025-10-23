import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';


const DetailsPage = () => {
    const { toyId } = useParams();
    const data = useLoaderData();
    const detail = data.find(single => String(single.toyId) === String(toyId));
    const handle=()=>{
        toast('Purchased Successfully');
    }
    return (
        <div className=''>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={detail.pictureURL}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{detail.toyName}</h1>
                        <p className="py-6 font-semibold text-accent">
                            {detail.description}
                        </p>
                        <p className='mt-2 text-accent'><span className='font-medium'>Seller Name :</span> {detail.sellerName}</p>
                        <p className='mb-2 text-accent'><span className='font-medium'>Sellar Email :</span> {detail.sellerEmail}</p>
                        <div className='card-actions justify-between'>
                            <div className="badge badge-outline bg-red-300">Left {detail.availableQuantity}</div>
                            <div className="badge badge-outline bg-teal-300">Price {detail.price} $</div>
                            <div className="badge badge-outline bg-red-400">{detail.subCategory}</div>
                            <div className="badge badge-outline bg-red-300">Rating {detail.rating} <FaStar></FaStar></div>
                        </div>
                        <button onClick={handle} className="btn btn-primary mt-2">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;