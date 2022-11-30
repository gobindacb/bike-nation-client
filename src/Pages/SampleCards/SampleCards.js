import React from 'react';
import icon1 from '../../assets/icons/2503727.png'
import icon2 from '../../assets/icons/bicyleicon.png'
import icon3 from '../../assets/icons/e-bike.png'
import icon4 from '../../assets/icons/scooty.png'
import Samples from './Samples';

const SampleCards = () => {
    const samplesData = [
        {
            id: 1,
            name: 'Motor-Bike',
            description: 'You Can Sell and Buy M-Bike here',
            img: icon1,
        },
        {
            id: 2,
            name: 'Bicycle',
            description: 'You Can Sell and Buy Bicycle here',
            img: icon2,
        },
        {
            id: 3,
            name: 'E-Bike',
            description: 'You Can Sell and Buy E-Bike here',
            img: icon3,
        },
        {
            id: 4,
            name: 'Scooty',
            description: 'You Can Sell and Buy Scooty here',
            img: icon4,
        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <p className='text-primary text-xl font-bold uppercase'>BIKE NATION</p>
                <h3 className='text-3xl font-semibold'>Sell and Buy Used Bike Categories</h3>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 m-8'>
                    {
                        samplesData.map(sample => <Samples
                            key={sample.id}
                            sample={sample}
                        ></Samples>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SampleCards;