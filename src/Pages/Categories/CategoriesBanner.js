import React from 'react';
import catb from '../../assets/images/24ae8def288851503cf68340df174963.gif'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns'

const CategoriesBanner = ({ selectedDate, setSelectedDate }) => {


    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <header>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={catb} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div> <h1>Current date is {date}</h1></div>
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You have selected date: {format(selectedDate, 'PP')}</p>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default CategoriesBanner;