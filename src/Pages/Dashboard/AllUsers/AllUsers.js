import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://bike-nation-server-tau.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://bike-nation-server-tau.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch();
                }
            })
    }

    const handleMakeSeller = id => {
        fetch(`https://bike-nation-server-tau.vercel.app/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Seller Successfully')
                    refetch();
                }
                console.log(data);
            })
    }


    return (
        <div>
            <p>All Users</p>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                SL.
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {user.name}

                                </td>
                                <td>{user.email}</td>
                                <td>-</td>
                                <th>
                                    {user?.role !== 'admin' &&
                                        <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-primary btn-xs">Make Admin</button>
                                        ||
                                        <button className='btn btn-xs btn-success'>Admin</button>
                                    }

                                    {
                                        user?.role !== 'seller' &&
                                        <button onClick={() => handleMakeSeller(user._id)} className="btn btn-primary btn-xs">Make Seller</button>
                                        ||
                                        <button className='btn btn-xs btn-success'>Seller</button>
                                    }
                                </th>
                                <th>
                                    <button className="btn btn-secondary btn-xs">X</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;