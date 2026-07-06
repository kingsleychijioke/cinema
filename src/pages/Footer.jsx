import React from "react";
import "./Footer.css";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import FooterNavItem from "../components/FooterNavItem";

function Footer() {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of service",
    "Privacy Policy",
  ];

  const locations = [
    "Times Square, New York, USA",
    "Leicester Square, London, UK",
    "Shibuya, Tokyo, Japan",
    "Marina Bay, Singapore",
    "Victoria Island, Lagos, Nigeria",
  ];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>CINEMA</span>
              </a>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore neque quaerat non ullam, fuga ex nesciunt similique!
                Dicta sequi debitis et, necessitatibus beatae, aliquid dolorem
                ullam quaerat obcaecati qui quo!
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <IoLogoTwitter />
                </a>
                <a href="#" className="facebook">
                  <IoLogoFacebook />
                </a>
                <a href="#" className="instagram">
                  <IoLogoInstagram />
                </a>
                <a href="#" className="youtube">
                  <IoLogoYoutube />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-6 footer-links">
              <h4>Our Cinemas</h4>

              <ul>
                {locations.map((location) => (
                  <FooterNavItem key={location} name={location} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact US</h4>
              <p>
                Street Name <br />
                City Name, State 123456
                <br />
                Australia <br />
                <br />
                <strong>Phone:</strong> +234 9076 151 337
                <br />
                <strong>Email:</strong> puqudrillplex@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>PSX</span>
          </strong>
          .All Right Reserved
        </div>
        <div className="credits">
          Design by <a href="#">Mr Puppi</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
