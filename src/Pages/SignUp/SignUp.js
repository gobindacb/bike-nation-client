import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Cngrats!!! User Created Successfully...you are welcome to Bike-Nation')
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photo
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.photo, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (name, photo, email) => {
        const user = { name, photo, email };
        fetch('https://bike-nation-server-tau.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                // getUserToken(email);


            })
    }

    // const getUserToken = email => {
    //     fetch(`https://bike-nation-server-tau.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken);
    //                 navigate('/');
    //             }
    //         })
    // }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-8 bg-base-300 shadow-2xl'>
                <h2 className='text-2xl text-center font-bold'>Sign Up !!!</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >
                    {/* <div className="form-control w-full max-w-xs flex justify-between gap-2">
                        <label className="label"><span className="label-text">Sign Up As</span></label>
                        <input type="selected" {...register("choice", {
                            required: "Your Name is required"
                        })}
                            className="input input-bordered w-full max-w-xs" hidden />
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Sign Up As</option>
                            <option>Seller</option>
                            <option>Byer</option>
                        </select>
                    </div> */}
                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Your Name is required"
                            })}

                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input type="text" {...register("photo")}

                                className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email", {
                                required: "Email Address is required"
                            })}

                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "Password is required"
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
                            {/* <label className="label"><span className="label-text text-secondary">Remember Password?</span></label> */}
                        </div>
                    </div>

                    <input className='btn btn-accent w-full hover mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link className='text-primary font-bold' to='/login'>Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Start with Google</button>
            </div>
        </div>
    );
};

export default SignUp;