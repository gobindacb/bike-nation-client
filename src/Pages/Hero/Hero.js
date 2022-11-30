import React from 'react';
import bg1 from '../../assets/images/bg1.bicycle.jpg';
import tmbike from '../../assets/images/tmbike.gif'

const Hero = () => {
    return (
        <section
        >
            <div
                style={{
                    background: `url(${bg1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
                className="bg-violet-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl"><span className='text-secondary'>Bike</span> <span className='text-violet-600'>Nation</span></h1>
                    <h1 className="text-2xl font-bold leading-none sm:text-3xl xl:max-w-3xl text-white-100">Dream On Wheels</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-white">Learn more</button>
                    </div>
                </div>
            </div>
            <img src={tmbike} alt="bike" className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
        </section>
    );
};

export default Hero;