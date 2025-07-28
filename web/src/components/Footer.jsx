import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-navigation">
          <div className="footer-elements">
            <div className="footer-main">
              <div className="footer-logo-section">
                <img
                  src="assets/top-nav-logo.svg"
                  alt="Cherie Logo"
                  className="footer-logo"
                />
                <p className="footer-tagline">
                  Building relationships, a connection at a time.
                </p>
              </div>
            <div className="footer-links-section">
              <div className="footer-links">
                <div className="footer-link-row">
                  <Link to="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </Link>
                  <a href="#blog" className="footer-link">
                    Blog
                  </a>
                </div>
                <span className="contact-email">team@ccherished.com</span>
              </div>
            </div>
            </div>

            <div className="footer-social">
              <div className="social-icon">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15.1064" r="15" fill="black" />
                  <path
                    d="M8.22178 22.165H11.3059V12.1807H8.22178V22.165Z"
                    fill="white"
                  />
                  <path
                    d="M7.94141 8.99316C7.94141 9.97754 8.7358 10.7744 9.76384 10.7744C10.7451 10.7744 11.5395 9.97754 11.5395 8.99316C11.5395 8.00879 10.7451 7.16504 9.76384 7.16504C8.7358 7.16504 7.94141 8.00879 7.94141 8.99316Z"
                    fill="white"
                  />
                  <path
                    d="M19.8106 22.165H22.9414V16.6807C22.9414 14.0088 22.3339 11.8994 19.2031 11.8994C17.7078 11.8994 16.6797 12.7432 16.2592 13.54H16.2124V12.1807H13.2685V22.165H16.3526V17.2432C16.3526 15.9307 16.5863 14.665 18.2218 14.665C19.8106 14.665 19.8106 16.165 19.8106 17.29V22.165Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="social-icon">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15.1064" r="15" fill="black" />
                  <path
                    d="M22.5 15.1977C22.5 11.3061 19.3863 8.10645 15.5 8.10645C11.6137 8.10645 8.5 11.3061 8.5 15.1977C8.5 18.6434 11.0435 21.5111 14.3911 22.1064V17.5791H12.8306V15.1977H14.3911V13.4117C14.3911 11.8389 15.379 10.9091 16.7661 10.9091C17.4597 10.9091 18.1532 11.0133 18.1532 11.0133V12.5253H17.3782C16.6032 12.5253 16.2984 12.9815 16.2984 13.4985V15.1977H18.0718L17.8065 17.5791H16.2984V22.1064C19.646 21.5111 22.5 18.6434 22.5 15.1977Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="social-icon">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15.1064" r="15" fill="black" />
                  <path
                    d="M21.996 11.5979C22.685 11.0809 23.306 10.4605 23.788 9.73673C23.168 10.0125 22.444 10.2193 21.72 10.2882C22.479 9.84013 23.03 9.15079 23.306 8.28912C22.616 8.70272 21.824 9.01293 21.031 9.18526C20.342 8.46145 19.411 8.04785 18.377 8.04785C16.378 8.04785 14.758 9.6678 14.758 11.6669C14.758 11.9426 14.793 12.2183 14.861 12.4941C11.863 12.3217 9.174 10.8741 7.382 8.70272C7.072 9.21973 6.9 9.84013 6.9 10.5295C6.9 11.7703 7.52 12.8732 8.52 13.5281C7.934 13.4936 7.348 13.3558 6.865 13.08V13.1145C6.865 14.8723 8.106 16.3199 9.76 16.6646C9.485 16.7335 9.14 16.8024 8.83 16.8024C8.588 16.8024 8.382 16.768 8.14 16.7335C8.588 18.1811 9.933 19.2151 11.518 19.2496C10.277 20.2147 8.726 20.8006 7.037 20.8006C6.727 20.8006 6.452 20.7661 6.176 20.7317C7.761 21.7657 9.657 22.3516 11.725 22.3516C18.377 22.3516 21.996 16.8714 21.996 12.0805C21.996 11.9081 21.996 11.7703 21.996 11.5979Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <span className="copyright-text">
              © 2025 CCherished. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
