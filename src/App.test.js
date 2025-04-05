import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

test('Renders the TableReservation Title', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reserve Your Table");
  expect(headingElement).toBeInTheDocument();
});
