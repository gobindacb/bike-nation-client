import React from 'react';

const CatDetailsCards = ({ product, setItem }) => {
    const { orginal_price, resale_price, location, used_years, title, image_url, details } = product

    return (
        <div className="card bg-base-200 shadow-xl">
            <figure className="px-8 pt-8">
                <img src={image_url} alt="bike" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className='flex justify-even gap-2'>
                    <p>Orginal Price:$ {orginal_price}</p>
                    <p>Selling Price:$ {resale_price}</p>
                </div>
                <div className='flex justify-even gap-2'>
                    <p>Used: {used_years} years</p>
                    <p>Location: {location}</p>
                </div>
                <div className="card-actions">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setItem(product)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default CatDetailsCards;