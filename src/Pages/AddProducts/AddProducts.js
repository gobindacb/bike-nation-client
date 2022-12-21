import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const photoHostKey = process.env.REACT_APP_imgbb_key
    console.log(photoHostKey);


    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    // const { data: category, isLoading } = useQuery({
    //     queryKey: ['category'],
    //     queryFn: async () => {
    //         const res = await fetch('https://bike-nation-server-tau.vercel.app/categoryName');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    const handleAddProduct = data => {

        // const photo = data.photo[0];
        // const formData = new FormData();
        // formData.append('photo', photo);
        // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${photoHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(photoData => {
        //         console.log(photoData.data.url)
        //         if (photoData.success) { }
        //     })
        const product = {
            name: data.category,
            product_condition: data.condition,
            orginal_price: data.cost,
            resale_price: data.price,
            image_url: data.photo,
            seller_name: data.seller_name,
            title: data.title,
            email: data.email,
            phone: data.phone,
            published_date: data.date,
            seller_img: data.img,
            location: data.location,
            details: data.details,
            used_years: data.used

        }
        fetch('https://bike-nation-server-tau.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer${localStorage.getItem('accesToken')}`
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Dear seller ${user?.displayName} your product ${data.title} added successfully`)
            })

    }

    // if (isLoading) {
    //     return <div className='flex justify-center items-center h-full'>
    //         <p className='text-7xl font-thin'>L</p>
    //         <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
    //         <p className='text-7xl font-thin'>ading....</p>
    //     </div>
    // }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-8 bg-base-300 shadow-2xl'>
                <h2 className='text-2xl text-center font-bold'>Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className='flex justify-between'>
                        <div>
                            <label className="label"><span className="label-text">Product Category</span></label>
                            <select
                                {...register("category", {
                                    required: "category is required"
                                })}
                                className="select select-bordered w-full max-w-xs">
                                <option>MOTOR-BIKE</option>
                                <option>BICYCLE</option>
                                <option>SCOOTY</option>
                                <option>E-BIKE</option>

                                {/* {
                                    category &&
                                    category.map(catg => <option
                                        key={catg._id}
                                        value={catg.name}
                                    >{catg.name}</option>)
                                } */}

                            </select>
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Prodect Condition</span></label>
                            <select
                                {...register("condition", {
                                    required: "condition is required"
                                })}
                                className="select select-bordered w-full max-w-xs">
                                <option>Excelent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Orginal Price</span></label>
                            <input type="text" {...register("cost", {
                                required: "Orginal Price is required"
                            })}

                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Resale Price</span></label>
                            <input type="text" {...register("price")}

                                className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Product Name</span></label>
                            <input type="text" {...register("title", {
                                required: "Product Name is required"
                            })}

                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Photo Url</span></label>
                            <input type="text" {...register("photo", {
                                required: "Photo is required"
                            })}


                                className="input input-bordered w-full max-w-xs" />
                            {errors.photo && <p>{errors.photo.message}</p>}

                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Seller Name</span></label>
                            <input type="text" defaultValue={user?.displayName} {...register("seller_name", {
                                required: "Product Name is required"
                            })}

                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Phone</span></label>
                            <input type="text" {...register("phone")}

                                className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Seller Email</span></label>
                            <input type="email" defaultValue={user?.email} {...register("email")}

                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Location</span></label>
                            <input type="text" {...register("location", {
                                required: "Location is required"
                            })}
                                className="input input-bordered w-full max-w-xs" />

                        </div>

                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Add a Description</span></label>
                            <input type="text" {...register("details", {
                                required: "description is required"
                            })}
                                className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Used Years</span></label>
                            <input type="number" {...register("used", {
                                required: "description is required"
                            })}
                                className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">

                        <input type="text" defaultValue={user?.photoURL} {...register("seller_image", {

                        })}
                            className="input input-bordered w-full max-w-xs" hidden />

                    </div>
                    <div className="form-control w-full max-w-xs">

                        <input type="text" defaultValue={date} {...register("date", {

                        })}
                            className="input input-bordered w-full max-w-xs" hidden />

                    </div>

                    <input className='btn btn-accent w-full hover mt-4' value="Add Product" type="submit" />

                </form>
            </div >
        </div >
    );
};

export default AddProducts;