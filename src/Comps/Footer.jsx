import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>OASIS HOTEL</h3>
          <p>123 Luxury Lane</p>
          <p>Sunny Beach, CA 90210</p>
          <p>Email: reservations@oasishotel.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>

        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul className='quickLinks'>
            <li>
              <a href='/rooms'>Rooms & Suites</a>
            </li>
            <li>
              <a href='/reservations'>Book Now</a>
            </li>
            <li>
              <a href='/amenities'>Amenities</a>
            </li>
            <li>
              <a href='/contact'>Contact Us</a>
            </li>
            <li>
              <a href='/faq'>FAQ</a>
            </li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for exclusive offers</p>
          <form className='newsletter-form'>
            <input type='email' placeholder='Enter your email' required />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} OASIS HOTEL Hotel. All rights
          reserved.
        </p>
        <div className='social-links'>
          <a href='#'>Facebook</a>
          <a href='#'>Instagram</a>
          <a href='#'>Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
