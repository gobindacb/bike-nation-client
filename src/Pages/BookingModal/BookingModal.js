import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ item, setItem }) => {
    const { title, name, resale_price, image_url
    } = item
    const { user } = useContext(AuthContext);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bdate = form.bdate.value;
        const name = form.name.value;
        const title = form.title.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const meeting = form.meeting.value;
        const image = form.image.value;

        const booking = {
            bookingDate: bdate,
            name,
            itemTitle: title,
            email,
            price,
            phone,
            meetingLocation: meeting,
            image,
        }

        // console.log(booking);
        fetch('https://bike-nation-server-tau.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setItem(null);
                    toast.success('Booking Confirm')
                }
                else {
                    toast.error(data.message)
                }

            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-white-200">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex justify-between'>
                        <h3 className="text-lg font-bold">{name}</h3>
                        <h3 className="text-sm font-bold">{title}</h3>
                        <img src={image_url} alt='' className='w-24 h-20 rounded-full' />
                    </div>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6 bg-white-200'>
                        <input name="title" type="text" value={title} placeholder="Item name" className="input w-full" hidden />
                        <input name="image" type="text" value={image_url} placeholder="Item name" className="input w-full" hidden />
                        <input name="bdate" type="text" value={date} placeholder="Booking Date" className="input w-full" />
                        <div className='flex justify-between'>
                            <input name="name" type="text" defaultValue={user?.displayName} placeholder="Customer Name" className="input w-full" />
                            <input name="email" type="email" defaultValue={user.email} placeholder="E-mail Address" className="input w-full" />
                        </div>
                        <input name="price" type="text" value={resale_price} placeholder="Price" className="input w-full" />
                        <div className='flex justify-between'>
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full" />
                            <input name="meeting" type="text" placeholder="Meeting location" className="input w-full" />
                        </div>
                        <br />
                        <input className='w-full btn btn-secondary' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;