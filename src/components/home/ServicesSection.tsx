import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceBlockProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ icon, title, description, link }) => (
  <div className="service-block-two col-lg-3 col-md-6 col-sm-12">
    <div className="inner-box">
      <div className="upper-box">
        <div className="icon-box transition-500ms">
          <img src={icon} alt={title} />
        </div>
        <h5><Link to={link}>{title}</Link></h5>
        <div className="text">{description}</div>
      </div>
      <Link to={link} className="read-more">
        Read More <span className="flaticon-right-arrow-1"></span>
      </Link>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '/assets/images/resource/service-icon-1.jpg',
      title: 'Coaching',
      description: 'Magnetized strongly enough pre vending domain overeus all initial results to estimate.',
      link: '/service-detail'
    },
    {
      icon: '/assets/images/resource/service-icon-2.jpg',
      title: 'Consultation',
      description: 'Magnetized strongly enough pre vending domain overeus all initial results to estimate.',
      link: '/service-detail'
    },
    {
      icon: '/assets/images/resource/service-icon-3.jpg',
      title: 'Self Development',
      description: 'Magnetized strongly enough pre vending domain overeus all initial results to estimate.',
      link: '/service-detail'
    },
    {
      icon: '/assets/images/resource/service-icon-4.jpg',
      title: 'Life Programs',
      description: 'Magnetized strongly enough pre vending domain overeus all initial results to estimate.',
      link: '/service-detail'
    }
  ];

  return (
    <section className="services-section-two">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">
            {services.map((service, index) => (
              <ServiceBlock
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 