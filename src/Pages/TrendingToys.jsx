import React from 'react';
import ToyCard from './ToyCard';
import { Link } from 'react-router';

const TrendingToys = ({data}) => {
    const first6Toys = data.slice(0, 6);
    return (
        <div>
            <h2 className='text-3xl text-center text-red-400 mb-5 font-semibold'>Popular Toys</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center'>
                {
                    first6Toys.map(toy=><ToyCard key={toy.id} singleCard={toy}></ToyCard>)
                }
            </div>
            <div className='flex justify-center my-5'>
                <Link className='btn bg-linear-to-r from-blue-400 to-purple-40' to='/all-toys'>See all Toys</Link>
            </div>
        </div>
    );
};

export default TrendingToys;