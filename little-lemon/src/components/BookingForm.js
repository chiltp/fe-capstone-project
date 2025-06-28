import { useState } from 'react';
import PropTypes from 'prop-types';

function BookingForm({ availableTimes, onDateChange }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'date') {
      onDateChange(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting booking data:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Booking submitted successfully!');
      // Reset form after submission
      setFormData({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday'
      });
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.date && formData.time && formData.guests >= 1 && formData.guests <= 10;

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '400px', gap: '20px', margin: '0 auto' }}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        min={new Date().toISOString().split('T')[0]}
      />
      
      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        disabled={!formData.date}
      >
        <option value="">Select a time</option>
        {availableTimes.map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business">Business</option>
        <option value="Other">Other</option>
      </select>

      <button 
        type="submit" 
        disabled={!isFormValid || isSubmitting}
        style={{ marginTop: '20px' }}
      >
        {isSubmitting ? 'Submitting...' : 'Make Reservation'}
      </button>
    </form>
  );
}

BookingForm.propTypes = {
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDateChange: PropTypes.func.isRequired
};

export default BookingForm;