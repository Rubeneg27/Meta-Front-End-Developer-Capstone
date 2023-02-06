import React from 'react';
import { useState } from 'react';



const BookingForm = ({dispatch, availableTimes}) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState();
    const [guests, setGuests] = useState("");
    const [ocassion, setOcassion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for booking with us!")
    }

    return (
        <form 
        onSubmit={handleSubmit}
        >
            <div className="date-time">
              <div>
              <label 
              for="res-date">Choose date</label>
              <input 
                type="date" 
                id="res-date"
                value={date}       
                onChange={(e) => {
                  e.preventDefault()
                  dispatch({type:"setDate"})
                  setDate(e.target.value)
                }} 
              />
              </div>
              <div>
                <label for="res-time">Choose time</label>
                <select 
                id="res-time"
                data-testid="res-time"
                value={time}   
                onChange={availableTimes => 
                  setTime(availableTimes.target.value)
                }
                >
                {availableTimes.map((time)=> (
                <option>{time}</option>
                ))}
                </select>
            </div>
            </div>
            {/*DISPATCH TESTING BUTTON*/}
            <button onClick={(e) => {
                e.preventDefault()
                dispatch ({type:"setDate"})
                }}>
                DISPATCH TESTING BUTTON
            </button> 
            {/*RESET TESTING BUTTON*/}
            <button onClick={(e) => {
                e.preventDefault()
                dispatch ({type:""})
                }}>
                RESET TESTING BUTTON
            </button> 
            <div className="num-oc">
            <div>
             <label data-test-id="guestsLabel" for="guests">Number of guests</label>
                <input 
                type="number"
                 placeholder="1" 
                 min="1" 
                 max="10" 
                 id="guests" 
                 value={guests}
                 onChange={(e)=>{
                    setGuests(e.target.value)
                 }}
                 />
             </div>
             <div>
             <label for="occasion">Occasion</label>
             <select 
             value={ocassion}
             onChange={(e) => {setOcassion(e.target.value)
            }}
             id="occasion"
             >
               <option>Birthday</option>
               <option>Anniversary</option>
             </select>
             </div>
             </div>
             <button 
             type="submit" 
             value="" 
             disabled={!time || !date || !guests}
             >
             Make Your reservation
             </button>
             {time && date && guests && ocassion &&(<p>{`${guests} guests for day ${date} at ${time}. Happy ${ocassion}!` }</p>)}
             
        </form>
    )
}

export default BookingForm;