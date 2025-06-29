import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage'; 
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Contact from './pages/Contact';
import { useReducer } from 'react';
import { initializeTimes, timesReducer } from './timesReducer';
import { submitAPI } from './api'; // Make sure this file exists

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());
  const navigate = useNavigate(); // Initialize navigate hook

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  }; // Added missing closing brace

  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/booking-confirmed');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error submitting booking:', error);
      return false;
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;