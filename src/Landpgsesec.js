import React from "react";
import "./Landpgsesec.css";
// import phone1 from "./images (1).jpeg"; // replace with your images
// import phone2 from "./beach.jpg";
// import phone3 from "./images.jpeg";

const FashionShowcase = () => {
  return (
    <section className="fashion-section">
      <div className="phone">
        {/* <img src={phone1} alt="Trendy Threads" /> */}
        <div className="overlay">
          <h3>Welcome To</h3>
          <h2>Trendy Threads</h2>
          <p>Latest Styles. Better Fit. Next Generation Fashion.</p>
        </div>
      </div>

      <div className="phone">
        {/* <img src={phone2} alt="Discover Outfits" /> */}
        <div className="overlay">
          <h3>Discover</h3>
          <h2>Trendy Outfits</h2>
          <p>Curated collections tailored for your lifestyle.</p>
        </div>
      </div>

      <div className="phone">
        {/* <img src={phone3} alt="Tailor For Grace" /> */}
        <div className="overlay">
          <h3>Tailor Just</h3>
          <h2>For Grace</h2>
          <p>Custom pieces designed with elegance in mind.</p>
        </div>
      </div>
    </section>
  );
};

export default FashionShowcase;
