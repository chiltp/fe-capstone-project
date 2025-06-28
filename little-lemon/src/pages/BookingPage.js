import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

function BookingPage({availableTimes, onDateChange}) {
  return (
    <>
      <Header />
      <main className="booking-page">
        <h1>Reserve a Table</h1>
        <p>Please fill out the form below to book your reservation.</p>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={onDateChange}
        />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;