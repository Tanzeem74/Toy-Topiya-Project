import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToyCard = ({singleCard}) => {
    return (
        <div>
            <div className="card bg-base-300 w-[250px] md:w-[300px] h-96 shadow-sm p-4">
                <figure>
                    <img
                        className='w-full h-full'
                        src={singleCard.pictureURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {singleCard.toyName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline bg-red-300">Left {singleCard.availableQuantity}</div>
                        <div className="badge badge-outline bg-teal-300">Price {singleCard.price} $</div>
                        <div className="badge badge-outline bg-red-300">Rating {singleCard.rating} <FaStar></FaStar></div>
                    </div>
                    <Link to={`/toy-details/${singleCard.toyId}`} className='flex justify-center btn bg-blue-500' >View More</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;