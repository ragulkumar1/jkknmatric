import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer style-two">
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row clearfix">
            {/* Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="logo">
                      <Link to="/">
                        <img src="/assets/images/footer-logo-3.png" alt="JKKN Logo" />
                      </Link>
                    </div>
                    <div className="text">
                      In social science, agency is defined as the capacity of individuals to act free & to make their own free choices. One's agency is one's independent capability or ability to act on one's will.
                    </div>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h5>Pages</h5>
                    <div className="row clearfix">
                      {/* Column */}
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <ul className="list-link">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/services">Services</Link></li>
                          <li><Link to="/courses">Courses</Link></li>
                          <li><Link to="/blog">Blog Insight</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                        </ul>
                      </div>
                      {/* Column */}
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <ul className="list-link">
                          <li><Link to="/terms">Term & Condition</Link></li>
                          <li><Link to="/careers">Careers</Link></li>
                          <li><Link to="/support">Support</Link></li>
                          <li><Link to="/pricing">Price & Plans</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget info-widget">
                    <h5>Get In Touch</h5>
                    <ul className="contact-info-list">
                      <li>
                        <span>School Office</span>
                        <a href="#">JKKN Matriculation Higher Secondary<br />Namakkal District,</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Kumarapalayam,<br />Tamil Nadu – 638 1</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget newsletter-widget">
                    <h5>Newsletter</h5>
                    {/* Newsletter Form */}
                    <div className="newsletter-form style-two">
                      <form method="post" action="/contact">
                        <div className="form-group">
                          <span className="icon flaticon-envelope"></span>
                          <input type="email" name="search-field" placeholder="Email address" required />
                          <button type="submit" className="theme-btn submit-btn">
                            Subscribe Now<span className="arrow flaticon-right-arrow"></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="clearfix">
            <div className="pull-left">
              <div className="copyright">
                Copyright By &copy; <Link to="/">JKKN</Link> - {new Date().getFullYear()}
              </div>
            </div>
            <div className="pull-right">
              <div className="payments">
                <img src="/assets/images/icons/payment.png" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 