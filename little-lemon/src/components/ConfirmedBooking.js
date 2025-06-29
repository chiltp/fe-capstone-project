import Header from '../components/Header';
import Footer from '../components/Footer';

function ConfirmedBooking() {
  return (
    <>
      <Header />
      <main className="confirmed-booking">
        <div className="confirmation-message">
          <h1>🎉 Your Table is ready at Little Lemon! 🍋</h1>
          <h2>Reservation Confirmed!</h2>
          <p>
            Thank you for choosing <strong>Little Lemon</strong>! <br />
            Your reservation has been <span style={{ color: '#4BB543', fontWeight: 'bold' }}>successfully confirmed</span>.
          </p>
          <p>
            We can't wait to welcome you for an unforgettable dining experience.<br />
            If you have any special requests, feel free to let us know!
          </p>
          <button className="back-to-home">
          <a href="/">Back to Home</a>
        </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;