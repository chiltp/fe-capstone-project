import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-description">
          We'd love to hear from you! Whether you have questions about our services, 
          want to provide feedback, or just say hello, our team is ready to assist you.
        </p>

        <div className="contact-methods">
          <section className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Email:</strong> littlelemmon@gmail.com<br />
              <strong>Phone:</strong> (123) 456-7890<br />
              <strong>Address:</strong> 123 Restaurant Lane, Foodville, FC 12345
            </p>
          </section>

          <section className="business-hours">
            <h2>Business Hours</h2>
            <p>
              <strong>Monday - Friday:</strong> 9:00 AM - 10:00 PM<br />
              <strong>Saturday - Sunday:</strong> 10:00 AM - 11:00 PM
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Contact;