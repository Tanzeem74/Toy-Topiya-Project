import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ToyCard from '../Pages/ToyCard';

const AllToys = () => {
    useEffect(() => {
        document.title = "All toys - ToyTopia";
    }, []);
    const data = useLoaderData();
    return (
        <div className='container mx-auto m-4'>
            <h2 className='text-center font-semibold text-3xl m-2'>All Items</h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    data.map(toy => <ToyCard key={toy.id} singleCard={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;