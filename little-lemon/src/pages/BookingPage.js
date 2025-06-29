import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

function BookingPage({availableTimes, onDateChange, submitForm}) {
  return (
    <>
      <Header />
      <main className="booking-page">
        <h1>Reserve a Table</h1>
        <p>We're excited to host you! Please provide your reservation details below.</p>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={onDateChange}
          submitForm={submitForm}
        />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;