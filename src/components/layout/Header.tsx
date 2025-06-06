import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  title: string;
  path: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { 
    title: 'Services', 
    path: '/services',
    children: [
      { title: 'Education', path: '/services/education' },
      { title: 'Online Learning', path: '/services/online-learning' },
      { title: 'Career Guidance', path: '/services/career-guidance' }
    ]
  },
  { title: 'Courses', path: '/courses' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="container">
          <div className="header-inner">
            <div className="logo-box">
              <Link to="/">
                <img src="/assets/images/logo.png" alt="JKKN Matric" />
              </Link>
            </div>
            <div className="nav-outer clearfix">
              <div className="mobile-menu-toggler" onClick={toggleMenu}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className={`collapse navbar-collapse show clearfix ${isMenuOpen ? 'show' : ''}`}>
                  <ul className="navigation clearfix">
                    {menuItems.map((item, index) => (
                      <li key={index} className={item.children ? 'dropdown' : ''}>
                        <Link to={item.path}>{item.title}</Link>
                        {item.children && (
                          <ul>
                            {item.children.map((child, childIndex) => (
                              <li key={childIndex}>
                                <Link to={child.path}>{child.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="outer-box">
                <Link to="/contact" className="theme-btn btn-style-one">
                  <span className="txt">Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 