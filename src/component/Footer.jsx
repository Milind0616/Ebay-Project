import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><a className="heading" href="#">About eBay</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
          <ul>
            <li><a href="#">About eBay</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li><a className="heading" href="#">About eBay</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
          <ul>
            <li><a className="heading" href="#">About eBay</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li><a className="heading" href="#">About eBay</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
          <ul>
            <li><a href="#">About eBay</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
        <ul>
            <li><a className="heading" href="#">About eBay</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
        <ul>
            <li><a href="#">About eBay</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Help & Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} eBay Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
