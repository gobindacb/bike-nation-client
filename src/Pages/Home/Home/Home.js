import React from 'react';
import Banner from '../../Banner/Banner';
import Hero from '../../Hero/Hero';
import SampleCards from '../../SampleCards/SampleCards';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Hero></Hero>
            <SampleCards></SampleCards>

        </div>
    );
};

export default Home;