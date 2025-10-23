import React from 'react';
import TrendingToys from './TrendingToys';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import TryNow from './TryNow';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='container mx-auto'>
            <TrendingToys key={data.id} data={data}></TrendingToys>
            <Slider></Slider>
            <TryNow></TryNow>
        </div>
    );
};

export default Home;