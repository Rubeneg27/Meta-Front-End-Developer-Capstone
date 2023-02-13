import BookingForm from "./BookingForm"
import { fetchAPI } from "../date_API";
import {useReducer} from 'react'

export const initializeTimes = fetchAPI(new Date())
export const updateTimes = (state, action) => fetchAPI(new Date(action.date));
const BookingPage = () => {
  
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes); 
  
  return (
    <div className="Booking">
      <BookingForm
      dispatch={dispatch}
      availableTimes={availableTimes}
      />
    </div>
    );
  };
  
  export default BookingPage;