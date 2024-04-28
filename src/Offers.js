import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css'; // Import CSS styles

function Offers() {
  // Function to toggle the navigation menu
  const toggleMenu = () => {
    const navbar = document.getElementById('navbar');
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
    } else {
      navbar.classList.add('active');
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <a href="home.html">
          <img src="Car-Ride (1).png" alt="CabRide Logo" style={{ height: '40px' }} />
        </a>
        <nav id="navbar">
          <Link to="/drive">
            Drive
          </Link>
          <Link to="/">Home</Link>
          <Link to="/select">
            Select
          </Link>
          <Link to="/offers">Offers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/support">Support</Link>
          <Link to="/About">About</Link>
        </nav>
        <span id="menu-bars" className="fas fa-bars" onClick={toggleMenu}></span>
      </header>

      {/* Content Section */}
      <div className="content-section">
        <h1 class="headline">Exclusive Offers</h1>
        <p>Take advantage of our current promotions to save money on your next ride. We have a variety of offers available for all types of trips.</p>

        {/* Featured Offers */}
        <div className="featured-offers">
          <h2>Ride Smart with CabRide Deals</h2>
          <p>Experience the best in class with CabRide! Check out our latest offers and promotions for the best ride experience.</p>
          {/* <a href="curoffer.html" className="cta-button">View Current Offers</a> */}
          <Link to="/current-offer">Current Offers</Link>
        </div>ffers

        {/* Offers Section */}
        <div className="offers-section">
          {/* Offer Card 1 */}
          <div className="offer-card">
            <img src="20.jpg" alt="Offer 1" />
            <h3>20% Off on All Rides</h3>
            <p>Get 20% off on all rides for the next month. Don't miss out on this amazing offer!</p>
            <button>Use Code: RIDE20</button>
          </div>

          {/* Offer Card 2 */}
          <div className="offer-card">
            <img src="offer2.png" alt="Offer 2" />
            <h3>Flat Rs. 100 Off</h3>
            <p>Enjoy a flat Rs. 100 off on your next ride when you book a cab with CabRide.</p>
            <button>Use Code: FLAT100</button>
          </div>

          {/* Offer Card 3 */}
          <div className="offer-card">
            <img src="offer3.png" alt="Offer 3" />
            <h3>Buy 1 Get 1 Free</h3>
            <p>Book one ride and get another one for free! Perfect for a round trip or a day of exploring.</p>
            <button>Use Code: B1G1</button>
          </div>

          {/* Offer Card 4 */}
          <div className="offer-card">
            <img src="offer4.jpg" alt="Offer 4" />
            <h3>Free Upgrade to Luxury</h3>
            <p>Upgrade to a luxury ride at no extra cost! Travel in style with CabRide.</p>
            <button>Use Code: LUXURYFREE</button>
          </div>

          {/* Offer Card 5 */}
          <div class="offer-card">
            <img src="offer5.jpg" alt="Offer 5" />
            <h3>Weekend Special</h3>
            <p>Enjoy an extra discount on weekend rides. Book now for a special price!</p>
            <button>Use Code: WEEKEND</button>
          </div>

          {/* Offer Card 6 */}
          <div class="offer-card">
            <img src="offer6.jpg" alt="Offer 6" />
            <h3>Family Pack: 10% Off</h3>
            <p>Travel with your family and enjoy a 10% discount on your total fare.</p>
            <button>Use Code: FAMILY10</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
