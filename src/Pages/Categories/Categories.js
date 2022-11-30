import React, { useState } from 'react';
import CategoriesBanner from './CategoriesBanner';
import CategoryCards from './CategoryCards';

const Categories = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <p>This is Categories</p>
            <CategoriesBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></CategoriesBanner>
            <CategoryCards
                selectedDate={selectedDate}
            ></CategoryCards>
        </div>
    );
};

export default Categories;