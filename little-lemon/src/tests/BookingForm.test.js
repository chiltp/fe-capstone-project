import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

// Mock props
const mockProps = {
  availableTimes: ['17:00', '18:00', '19:00'],
  onDateChange: jest.fn(),
  submitForm: jest.fn()
};

describe('BookingForm static text', () => {
  test('renders all form labels correctly', () => {
    render(<BookingForm {...mockProps} />);
    
    // Test all form labels
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test('renders the submit button text', () => {
    render(<BookingForm {...mockProps} />);
    expect(screen.getByRole('button', { name: /Make Reservation/i })).toBeInTheDocument();
  });

  test('renders time options', () => {
    render(<BookingForm {...mockProps} />);
    expect(screen.getByText(/Select a time/i)).toBeInTheDocument();
    mockProps.availableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });
});