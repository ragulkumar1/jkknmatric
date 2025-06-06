import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="main-header header-style-three">
      {/* Header Top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container clearfix">
            {/* Top Left */}
            <div className="top-left clearfix">
              <div className="text">
                <span>Working time:</span> Monday to Friday 9 AM - 5 PM
              </div>
            </div>
            
            {/* Top Right */}
            <div className="top-right pull-right clearfix">
              {/* Social Box */}
              <ul className="social-box">
                <li><a href="https://www.facebook.com/" className="fa fa-facebook-f"></a></li>
                <li><a href="https://www.twitter.com/" className="fa fa-twitter"></a></li>
                <li><a href="https://www.behance.com/" className="fa fa-behance"></a></li>
                <li><a href="https://www.linkedin.com/" className="fa fa-linkedin"></a></li>
                <li><a href="https://youtube.com/" className="fa fa-youtube-play"></a></li>
              </ul>
              <div className="text">Call: <a href="tel:+919994156390">9994156390</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Lower */}
      <div className="header-lower">
        <div className="auto-container clearfix">
          {/* Logo Box */}
          <div className="pull-left logo-box">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo.png" alt="JKKN Logo" title="JKKN" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="main-menu navbar-expand-md">
            <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li className="current"><Link to="/">Home</Link></li>
                <li className="dropdown">
                  <Link to="/about">About</Link>
                  <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/faq">Faq's</Link></li>
                    <li><Link to="/price">Price</Link></li>
                    <li className="dropdown">
                      <Link to="/team">Our Team</Link>
                      <ul>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/team-detail">Team Detail</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/services">Services</Link>
                  <ul>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/service-detail">Services Detail</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/courses">Courses</Link>
                  <ul>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/course-detail">Courses Detail</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/blog">Blog</Link>
                  <ul>
                    <li><Link to="/blog">Our Blog</Link></li>
                    <li><Link to="/blog-detail">Blog Detail</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 