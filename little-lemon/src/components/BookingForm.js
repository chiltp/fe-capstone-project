import { useState } from 'react';
import PropTypes from 'prop-types';

function BookingForm({ availableTimes, onDateChange, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const isFormValid = formData.date && formData.time && formData.guests >= 1 && formData.guests <= 10;

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
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const success = await submitForm(formData);
      if (!success) {
        setSubmitError('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again later.');
      console.error('Booking submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">

      <label htmlFor="res-date">Choose your preferred date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        min={new Date().toISOString().split('T')[0]}
      />

      <label htmlFor="res-time">Select your preferred time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        disabled={!formData.date}
      >
        <option value="">Available times will appear after selecting a date</option>
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

      <label htmlFor="occasion">What's the occasion?</label>
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

      {submitError && (
        <p style={{ color: 'red', textAlign: 'center', margin: '0' }}>
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
      </button>
    </form>
  );
}

BookingForm.propTypes = {
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDateChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired
};

export default BookingForm;