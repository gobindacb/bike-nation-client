import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `https://bike-nation-server-tau.vercel.app/products?email=${user?.email}`;

    const { data: products = [], } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <p>My Orders/Bookings</p>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                SL.
                            </th>
                            <th>Image and Name</th>
                            <th>Price</th>
                            <th>Publish Date</th>
                            <th>Addvertise</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={product?.image_url} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-xs">{product.name}</div>
                                            <div className="font-bold">{product.title}</div>


                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold text-xs">${product.resale_price}</div>
                                        <div className="font-bold">${product.orginal_price}</div>
                                    </div>
                                </td>
                                <td>{product.published_date}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Make Addvertise</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;