import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage'; 
import BookingPage from './pages/BookingPage';
import About from './pages/About';
import { useReducer } from 'react';
import { initializeTimes, timesReducer } from './timesReducer';

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
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
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default Main;