import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = ({ booking }) => {

    const { user } = useContext(AuthContext);

    const url = `https://bike-nation-server-tau.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], } = useQuery({
        queryKey: ['bookings', user?.email],
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
                            <th>Booking Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking.itemTitle
                                            }</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    $ {booking.price}

                                </td>
                                <td>{booking.bookingDate
                                }</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Make Payment</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyOrders;