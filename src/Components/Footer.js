import React, { Component } from "react";
import "../Components/Footer.css";
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
            <div className="online-links">
              <i className="porto-icon-twitter links"></i>
              <i className="porto-icon-youtube links"></i>
              <i className="porto-icon-instagram links"></i>
              <i className="porto-icon-facebook links"></i>
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
                  <a href="https://forathletes.com/recovery">Recovery</a>
                </li>
                <li>
                  <a href="https://forathletes.com/sleep">Sleep</a>
                </li>
                <li>
                  <a href="https://forathletes.com/training">Training</a>
                </li>
                <li>
                  <a href="https://forathletes.com/mental-performance">
                    <text className="XYZ">ABCD</text>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Other Pages</h5>
              <ul>
                <li>
                  <a href="/about-us" className="color-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="color-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="color-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="color-white">
                    Terms &amp; Conditions
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
                  <a href="/sales/guest/form" className="color-white">
                    Guest User Order
                  </a>
                </li>
                <li>
                  <a
                    href="/donotsellmypersonalinformation"
                    className="color-white"
                  >
                    Do Not Sell My Personal Information
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
                <li>Subscriptions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-rights">© 2021. All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
