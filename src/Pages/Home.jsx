import React from 'react';
import TrendingToys from './TrendingToys';
import Slider from './Slider';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='container mx-auto'>
            <Slider></Slider>
            <TrendingToys key={data.id} data={data}></TrendingToys>
        </div>
    );
};

export default Home;