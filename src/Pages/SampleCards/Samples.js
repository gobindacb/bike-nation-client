import React from 'react';

const Samples = ({ sample }) => {
    const { name, description, img } = sample
    return (
        <div>
            <div className="card bg-base-200 shadow-xl">
                <figure className="px-8 pt-8">
                    <img src={img} alt={name} className="rounded-xl w-4/6 h-50" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm'>{description}</p>
                    <div className="card-actions">
                        <button>See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Samples;