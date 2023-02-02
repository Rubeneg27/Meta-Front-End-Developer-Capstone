import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './Componentes/BookingPage';


test('renders guests heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Number of guests"); 
  expect(headingElement).toBeInTheDocument();
});

//Will test the initial values of "availableTimes"
test('initialize function', () => {
  render(<BookingPage />);
  const options = ["10:00"]
  const dateElement = screen.getAllByTestId("res-time")
  expect(dateElement).render("10:00") //Terminar test
});
