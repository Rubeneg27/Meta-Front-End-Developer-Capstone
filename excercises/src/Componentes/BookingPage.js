import BookingForm from "./BookingForm"
import React, {useReducer, useState, useEffect} from "react"
import { fetchAPI } from "./dateGen";



const initialTimes = ["10:00"]

const BookingPage = () => {
  
  function initializeTimes (initialTimes) {
    return initialTimes
    }

  const updateTimes = (state, action) => {
    if (action.type==="setDate") {
    return state = ["éxito!"]
    }
    return initialTimes
    } 

   /*
    //FETCHING DATA
    const [date, setDateData] = useState({});
      useEffect(() => {
        fetchAPI(date)
        .then((response) => response.json())
        .then((jsonData) => setDateData(jsonData))
        .catch((error) => console.log(error))
      }, )
   */

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes, initializeTimes); 
  
  return (
    <div className="BookingPage">
    <div className="Booking">
      <BookingForm
      dispatch={dispatch}
      availableTimes={availableTimes}
      />
    </div>
    <div className="bookingPreview">
      <h3>Date</h3>
      <h3>Time</h3>
      <h3>Guests</h3>
      <h3>Occasion</h3>
    </div>
    </div>
    );
  };
  
  export default BookingPage;