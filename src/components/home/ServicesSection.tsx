import React from 'react';
import { Link } from 'react-router-dom';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: 'flaticon-education',
    title: 'Quality Education',
    description: 'We provide high-quality education with modern teaching methods and experienced faculty.',
    link: '/services/education'
  },
  {
    icon: 'flaticon-online-learning',
    title: 'Online Learning',
    description: 'Access our comprehensive online learning platform with interactive content and resources.',
    link: '/services/online-learning'
  },
  {
    icon: 'flaticon-graduation-cap',
    title: 'Career Guidance',
    description: 'Expert guidance for career planning and higher education opportunities.',
    link: '/services/career-guidance'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="icon-box">
                  <i className={service.icon}></i>
                </div>
                <h3 className="title">
                  <Link to={service.link}>{service.title}</Link>
                </h3>
                <p className="description">{service.description}</p>
                <Link to={service.link} className="read-more">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 