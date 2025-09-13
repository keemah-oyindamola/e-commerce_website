import React from 'react';
import "./Dashbd.css"
import sectimg from "./bagss.jpg"
// import sectimg from "./images.jpeg"
import Navbar from './Navbar';
import Dashbdnav from './Dashbdnav';
const Dashbd = () => {
  return (
    <>
    <Dashbdnav/>
      <section className="about-section">
      <div className="about-image">
        <div className="image-arch">
          <img src={sectimg} alt="Fashion girl" />
        </div>
      </div>

      <div className="about-content">
        <h2>About The Store</h2>
        <p>
          Welcome To Trendy Threads, Your Ultimate Fashion Destination Right At
          Your Fingertips. Dive Into A Curated World Of Style Where Chic Meets
          Convenience.
        </p>
        <p>
          Discover The Latest Trends And Timeless Classics In Our Diverse
          Collection, Tailored To Suit Every Individual's Fashion Persona. From
          Everyday Essentials To Head-Turning Statement Pieces,
        </p>
        <p>
          Trendy Threads Offers An Array Of Clothing Options, Ensuring There's
          Something For Everyone. Our Innovative Virtual Dressing Room Lets You
          Visualize Outfits Before Purchase, Guaranteeing A Perfect Fit.
        </p>
        <p>
          With Seamless Navigation And Secure Checkout, Shopping Becomes
          Effortless. Stay Ahead Of The Curve With Our Regularly Updated Trend
          Highlights And Fashion Inspirations.
        </p>
        <p>
          Join A Community Of Fashion Enthusiasts, Share Your Looks, And Find
          Inspiration For Your Unique Style. Download Trendy Threads Today And
          Redefine Your Fashion Journey With A Tap.
        </p>
      </div>
    </section>
    </>
  )
}

export default Dashbd