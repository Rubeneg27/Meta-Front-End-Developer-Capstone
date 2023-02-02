import BookingForm from "./BookingForm"
import React, {useReducer, useState, useEffect} from "react"


const initialTimes = ["10:00"]

const BookingPage = () => {
  
  function initializeTimes (initialTimes) {
    return initialTimes
    }

  const updateTimes = (state, action) => {
    if (action.type==="setDate") 
    return state = ["éxito!"]
    }
   
    //FETCHING DATA
    const [dateData, setDateData] = useState({});
      useEffect(() => {
        fetchApi(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`)
        .then((response) => response.json())
        .then((jsonData) => setDateData(jsonData))
        .catch((error) => console.log(error))
      }, )
    */

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes, initializeTimes); 
  
  return (
    
    <div className="BookingPage">
      {availableTimes}
      <BookingForm
      dispatch={dispatch}
      availableTimes={availableTimes}
      />
    </div>
    );
  };
  
  export default BookingPage;