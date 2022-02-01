import React, { Component } from "react";
import "../Components/Footer.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div
      data-content-type="html"
      data-appearance="default"
      data-element="main"
      data-decoded="true"
    >
      <div class="footer-main" id="cunsumer_footer">
        <div className="footer">
          <div className="customer-logo">
            <div>
              <a
                href="https://forathletes.com/"
                aria-label="For Athletes"
                title="For Athletes"
              >
                <img
                  id="logo"
                  src="https://forathletes.com/media/wysiwyg/for-athletes-white-retina-500_x60_1_1.png"
                  alt="Logo"
                />
              </a>
            </div>
            <div class="social-container">
                 <a href="https://www.youtube.com"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                 </a>
                 <a href="https://www.facebook.com"
                     className="facebook social">
                     <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="https://www.twitter.com" 
                     className="twitter social">
                   <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                <a href="https://www.instagram.com"
                     className="instagram social">
                   <FontAwesomeIcon icon={faInstagram} size="2x" />
               </a>
            </div>
            <div>Contact Us</div>
          </div>
          <div className="footerlinks">
            <div>
              <h5>Categories</h5>
              <ul>
                <li>
                  <a href="https://forathletes.com/all-athletes.html">
                    Athletes
                  </a>
                </li>
                <li>
                  <a href="https://forathletes.com/sports">Sports</a>
                </li>
                <li>
                  <a href="https://forathletes.com/nutrition">Nutrition</a>
                </li>
                <li>
                  <a href="https://forathletes.com/supplements">Supplements</a>
                </li>
                <li>
                  <a href="https://forathletes.com/recovery">Recovery & Sleep</a>
                </li>
                <li>
                  <a href="https://forathletes.com/training">Training</a>
                </li>
                <li>
                  <a href="https://forathletes.com/mental-performance">Mental performance</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Other Pages</h5>
              <ul>
              <li>
                  <a href="/Charities">Charities</a>
                </li>
                <li>
                  <a href="/about-us" className="color-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="color-white">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="color-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/return-policy" className="color-white">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="color-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="color-white">
                    Why Partner With Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5></h5>
              <ul>
                <li className="my-cart">
                  <a href="https://forathletes.com/checkout/cart/">My Cart</a>
                </li>
                <li>
                  <a href="https://forathletes.com/wishlist/">Wishlist</a>
                </li>
                <li>
                  <a href="https://forathletes.com/customer/account/">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="https://forathletes.com/sales/order/history/">
                    My Orders
                  </a>
                </li>
                {/* <li>Subscriptions</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-rights">&copy;{new Date().getFullYear()} forAthletes | All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
