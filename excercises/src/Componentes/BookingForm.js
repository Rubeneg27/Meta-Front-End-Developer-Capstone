import React from 'react';
import { useState } from 'react';



const BookingForm = ({dispatch, availableTimes}) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [ocassion, setOcassion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("")
        setGuests("")
        setOcassion("")
        setTime("")
        alert("Thank you for booking with us!")
    }

    return (
        <form 
        onSubmit={handleSubmit}
        >
              <label 
              for="res-date">Choose date</label>
              <input
                type="date" 
                id="res-date"
                aria-label="Reservation Date"
                value={date}       
                onChange={(e) => {
                  setDate(e.target.value)
                  dispatch({ date: e.target.value })       
                }} 
              />
                <label for="res-time">Choose time</label>
                <select
                placeholder=''
                id="res-time"
                aria-label="Reservation Time"
                value={time}   
                onChange={(e) => setTime(e.target.value)}
                >
                {availableTimes.map((time)=> (
                <option  key={time} value={time}>{time}</option>
                ))}
                <option disabled={true} value=""></option>
                </select>
             <label data-test-id="guestsLabel" for="guests">Number of guests</label>
                <input 
                type="number"
                 placeholder="0" 
                 min="1" 
                 max="10" 
                 id="guests" 
                 value={guests}
                 onChange={(e)=>{
                 setGuests(e.target.value)
                 }}
                 />
                 {guests <= 0 ? <p className='errorMessage'>We are not cooking for less than 1 guests! </p> : null}
             <label for="occasion">Occasion</label>
             <select
             key="ocassion-selector"
             value={ocassion}
             onChange={(e) => {setOcassion(e.target.value)
            }}
             id="occasion"
             >
               <option disabled={true} value=""></option>
               <option>Birthday</option>
               <option>Anniversary</option>
             </select>
             <button
             type="submit" 
             value="" 
             disabled={!time || !date || !guests || !ocassion || guests <= 0}
             >
             Make Your reservation
             </button>
             {time && date && guests > 0 && ocassion &&(<p className='resservation-message'>{`${guests} guests for day ${date} at ${time}. Happy ${ocassion}!` }</p>)}
        </form>
    )
}

export default BookingForm;