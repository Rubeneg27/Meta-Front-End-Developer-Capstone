import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './Componentes/BookingPage';


test('renders guests heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Number of guests"); 
  expect(headingElement).toBeInTheDocument();
});

/*
//Will test the initial values of "availableTimes"
test('initialize function', () => {
  render(<BookingPage />);
  const options = ["10:00"]
  const dateElement = screen.getAllByTestId("res-time")
  expect(dateElement).render("10:00") //Terminar test
});
*/

//Testing form validation

describe("Form validation", () => {
  test("Submit button is disabled if the fields are not selected", () => {
    const handleSubmit = jest.fn();
    render(<BookingPage onSubmit={handleSubmit} />);

    const submitButton = screen.getByText("Make Your reservation");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  })
})

describe("Form validation", () => {
  test("Submit button is enabled if the fields are selected", () => {
    render(<BookingPage />);

    const dateSelector = screen.getByLabelText("Choose date")
    const timeSelector = screen.getByLabelText("Choose time")
    const ocassionSelector = screen.getByLabelText("Occasion")
    const guestSelector = screen.getByLabelText("Number of guests")
    const submitButton = screen.getByText("Make Your reservation");

    fireEvent.change(dateSelector, {target: { value: "2023-05-02" }})
    fireEvent.change(timeSelector, {target: { value: "11:00"}})
    fireEvent.change(ocassionSelector, {target: { value: "Birthday"}})
    fireEvent.change(guestSelector, {target: { value: "2"}})

    expect(submitButton).toBeEnabled();
  })
})