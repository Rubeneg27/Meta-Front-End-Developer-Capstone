import React, {useState} from "react"

const BookingForm = ({dispatch, availableTimes}) => {
    const [time, setTime] = useState("");

    const formStyle = {
        display: "grid",
        maxwidth: "200px",
        gap: "20px"
    }

    const [date, setDate] = useState();

    const [guests, setGuests] = useState("1");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for booking with us!")
    }

    return (
        <form 
        style={formStyle} 
        onSubmit={handleSubmit}
        >
            <label for="res-date">Choose date</label>
            <input 
            type="date" 
            id="res-date"
            value={date}       
            onChange={(e) => {
              e.preventDefault()
              dispatch({type:"setDate"})
            }} 
            />
            <label for="res-time">Choose time</label>
            <select 
            id="res-time"
            data-testid="res-time"
            value={time}   
            onChange={e => 
            setTime(e.target.value)
            }
            >
                {availableTimes.map((time)=> (
                    <option>{time}</option>
                ))}
             </select>
             <button onClick={(e) => {
                e.preventDefault()
                dispatch ({type:"setDate"})
                }}>
                DISPATCH
            </button> {/*DISPATCH TESTING BUTTON*/}
            <button onClick={(e) => {
                e.preventDefault()
                dispatch ({type:""})
                }}>
                RESET
            </button> {/*RESET TESTING BUTTON*/}
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

             <label for="occasion">Occasion</label>
             <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
             </select>
             <input 
             type="submit" 
             value="Make Your reservation" 
             />
        </form>
    )
}

export default BookingForm;