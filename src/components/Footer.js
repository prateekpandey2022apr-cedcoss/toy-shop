import React from "react";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="row">
          <div className="col-2">
            <ul className="footer-links">
              <li>The Entertainer 2021</li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </div>
          <div className="col-2 payment-options">
            <ul>
              <li>
                <i class="fa-brands fa-cc-paypal"></i>
              </li>
              <li>
                <i class="fa-brands fa-cc-visa"></i>
              </li>
              <li>
                <i class="fa-brands fa-cc-mastercard"></i>
              </li>
              <li>
                <i class="fa-solid fa-credit-card"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
