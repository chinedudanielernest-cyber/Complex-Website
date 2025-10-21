import { useState } from "react";
import Login from "./login";
import "./form.css";

const galleryImages = [
  "src/images/gallery1.jpg",
  "src/images/gallery2.jpg",
  "src/images/gallery3.jpg",
  "src/images/gallery4.jpg",
  "src/images/gallery5.jpg",
  "src/images/gallery6.jpg",
];

function ComplexApp() {
  const [showLogin, setShowLogin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* LOGIN FORM */}
      {showLogin && <Login closeLogin={() => setShowLogin(false)} />}

      {/* HEADER */}
      <header className="header">
        <img className="mobile-logo" src="src/images/logo.png" alt="" />
        <p className="hideOnMobile">Store Locator</p>
        <p className="hideOnMobile">Sell on Website</p>

        <div className="search-box">
          <input type="search" placeholder="Search for products ..." />
          <button>Search</button>
        </div>

        <p className="hideOnMobile">Help?</p>
        <p className="hideOnMobile">Investors</p>
        <button onClick={() => setShowLogin(true)} className="sign-btn">
          Sign in
        </button>

        <img
          className="menu-icon"
          src="src/images/menu-icon.png"
          alt="menu"
          onClick={() => setSidebarOpen(true)}
        />
      </header>

      {/* SIDEBAR */}
      <nav className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <img
          className="close-icon"
          src="src/images/close.png"
          alt="close"
          onClick={() => setSidebarOpen(false)}
        />
        <img className="logo" src="src/images/logo.png" alt="" />
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">SERVICE</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-words">
          <h1>Welcome to our world of creativity and innovation.</h1>
          <p>
            Building ideas that connect people so that your success starts right
            here. Bringing simplicity and style to your digital space to
            Explore, Create, and Inspire.
          </p>
          <h4>We make the web work for you.</h4>
          <br />
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="about-us">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            We are a team of passionate creators dedicated to bringing ideas to
            life through design and technology. Our goal is to craft meaningful
            digital experiences that inspire, engage, and deliver real value.
          </p>
          <p>
            With a focus on innovation, collaboration, and simplicity, we turn
            challenges into opportunities — helping businesses and individuals
            grow in the digital world.
          </p>
          <h4>Our Mission</h4>
          <p>
            To empower creativity and make technology accessible for everyone.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </section>

      {/* IMAGE GALLERY SECTION */}
      <section className="gallery-carousel">
        <div className="gallery-container">
          <h2>Our Work</h2>
          <p>Explore our latest projects one by one.</p>

          <div className="carousel">
            <button className="arrow left-arrow" onClick={prevImage}>
              &#10094;
            </button>

            <img
              src={galleryImages[currentIndex]}
              alt={`Project ${currentIndex + 1}`}
            />

            <button className="arrow right-arrow" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <p>Hear from our satisfied clients and partners.</p>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <h4>Excellent Service!</h4>
            <p>
              "The team delivered outstanding results and exceeded our
              expectations. Highly recommend!"
            </p>
            <span>- Jane Doe, CEO of Company</span>
          </div>

          <div className="testimonial-card">
            <h4>Creative & Professional</h4>
            <p>
              "Their creativity and professionalism helped our project come to
              life beautifully."
            </p>
            <span>- John Smith, Marketing Director</span>
          </div>

          <div className="testimonial-card">
            <h4>Reliable & Efficient</h4>
            <p>
              "Always on time, always on point. They make working with them so
              easy and enjoyable."
            </p>
            <span>- Sarah Lee, Entrepreneur</span>
          </div>

          <div className="testimonial-card">
            <h4>Profits</h4>
            <p>
              "Always on time, always on point. They make working with them so
              easy and enjoyable."
            </p>
            <span>- Sarah Lee, Entrepreneur</span>
          </div>

          <div className="testimonial-card">
            <h4>Flexibility</h4>
            <p>
              "Always on time, always on point. They make working with them so
              easy and enjoyable."
            </p>
            <span>- Sarah Lee, Entrepreneur</span>
          </div>

          <div className="testimonial-card">
            <h4>Quick and time saver</h4>
            <p>
              "Always on time, always on point. They make working with them so
              easy and enjoyable."
            </p>
            <span>- Sarah Lee, Entrepreneur</span>
          </div>
        </div>
      </section>

      <section>
        <div className="scrolls">
          <div className="scrolls1">dada</div>
          <br />
          <div className="scrolls2">daesac</div>
          <br />
          <div className="scrolls3">eadscs</div>
          <br />
        </div>
      </section>
    </>
  );
}

export default ComplexApp;
