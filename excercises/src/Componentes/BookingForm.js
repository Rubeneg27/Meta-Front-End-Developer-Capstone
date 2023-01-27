import React, {useState} from "react"

const BookingForm = (props) => {
    const [time, setTime] = useState("");
    const [availableTimes, setAvailableTimes] = useState([
        {hour:"17:00"},
        {hour:"18:00"},
        {hour:"19:00"},
        {hour:"20:00"},
])
    const formStyle = {
        display: "grid",
        maxwidth: "200px",
        gap: "20px"
    }

    const [date, setDate] = useState();
    const [guests, setGuests] = useState("1");
    const handleSubmit = (e, handleTimeSelect) => {
        e.preventDefault();
        props.handleTimeSelect(time);
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
                setDate(e.target.value)
            }} 
            />
            <label for="res-time">Choose time</label>
            <select 
            id="res-time "
            value={time}
            onChange={e => 
            setTime(e.target.value)
            }
            >
                {availableTimes.map((time)=> (
                    <option>{time.hour}</option>
                ))}

             </select>
             <label for="guests">Number of guests</label>
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