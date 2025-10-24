import React from 'react';
import TrendingToys from './TrendingToys';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import TryNow from './TryNow';
import SponsorMarquee from './SponsorMarquee';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='container mx-auto bg-linear-to-r from-sky-300 via-indigo-300 to-purple-300 space-y-5'>
            <Slider></Slider>
            <TrendingToys key={data.id} data={data}></TrendingToys>
            <TryNow></TryNow>
            <SponsorMarquee></SponsorMarquee>
        </div>
    );
};

export default Home;