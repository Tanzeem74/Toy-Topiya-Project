import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToyCard = ({singleCard}) => {
    return (
        <div>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                    <Link className='flex justify-center btn bg-blue-500' to='/toy-details'>View More</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;