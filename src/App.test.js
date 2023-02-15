import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './Componentes/BookingPage';
import { initializeTimes, updateTimes } from "./Componentes/BookingPage";

test("Check if there are times returned", () => {
  const dates = initializeTimes;
  expect(dates).not.toBe([]);
});

test("Times are updated dynamically", () => {
  const dates = updateTimes("", { date: "2023-01-10" });
  expect(dates).not.toBe([]);
});

describe("Form validation", () => {
  test("Submit button is disabled if the fields are not selected", () => {
    const handleSubmit = jest.fn();
    render(<BookingPage onSubmit={handleSubmit} />);

    const submitButton = screen.getByText("Make Your reservation");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toBeDisabled();
  })
})

describe("Form validation", () => {
  test("Submit button is enabled if the fields are selected", () => {
    render(<BookingPage />);

    const dateSelector = screen.getByLabelText("Choose date");
    const timeSelector = screen.getByLabelText("Choose time");
    const ocassionSelector = screen.getByLabelText("Occasion");
    const guestSelector = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByText("Make Your reservation");

    fireEvent.change(dateSelector, {target: { value: "2023-05-02" }})
    fireEvent.change(timeSelector, {target: { value: "11:00" }})
    fireEvent.change(guestSelector, {target: { value: "4" }})
    fireEvent.change(ocassionSelector, {target: { value: "Birthday" }})
    
    expect(submitButton).toBeEnabled();
  })
})