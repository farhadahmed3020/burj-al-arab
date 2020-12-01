import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Booking = () => {
 
    const [booking ,setBooking] = useState([]);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);


    useEffect(() =>{
       fetch('http://localhost:5000/booking?email='+loggedInUser.email,{
           method:'GET',
           headers: { 
               'Content-Type':'application/json',
               authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
       })
       .then(res => res.json())
       .then(data => setBooking(data));
    },[]);

    return (
        <div>
            <h3> You have {booking.length} bookings</h3>

            {
                booking.map (roomBook => <li> {roomBook.name} 
                from: {(new Date(roomBook.checkIn).toDateString('dd/MM/yyyy'))} 
                to :{(new Date(roomBook.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Booking;
