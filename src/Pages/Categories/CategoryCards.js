import React from 'react';
import { format } from 'date-fns'
import CategoryCart from './CategoryCart';
import { useQuery } from '@tanstack/react-query';


const CategoryCards = ({ selectedDate }) => {
    // const [categories, setCategories] = useState([]);

    // , isLoading wiil set after categories
    // const { data: categories = [] } = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: () => fetch('https://bike-nation-server-tau.vercel.app/categories')
    //         .then(res => res.json())
    // })

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://bike-nation-server-tau.vercel.app/categories');
            const data = await res.json();
            return data
        }
    })

    // useEffect(() => {
    //     fetch('https://bike-nation-server-tau.vercel.app/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

    return (
        <section className='mt-16'>
            <p className='text-center font-bold text-secondary'>Category Cards</p>
            <p className='text-center font-bold text-primary'>Available Date : {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6'>
                {
                    categories.map(category => <CategoryCart
                        key={category._id}
                        category={category}

                    ></CategoryCart>)
                }
            </div>
        </section>
    );
};

export default CategoryCards;