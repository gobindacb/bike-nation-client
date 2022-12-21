import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import CatDetailsCards from './CatDetailsCards'




const CatDetails = () => {
    const [bikes, setBikes] = useState([]);
    const [item, setItem] = useState(null);



    useEffect(() => {
        fetch('https://bike-nation-server-tau.vercel.app/products')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])




    return (

        <section>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
                {
                    bikes.map(product => <CatDetailsCards
                        key={product._id}
                        product={product}
                        setItem={setItem}
                    ></CatDetailsCards>)
                }

            </div>
            {
                item &&
                <BookingModal
                    item={item}
                    setItem={setItem}
                ></BookingModal>

            }
        </section>
    );
};

export default CatDetails;