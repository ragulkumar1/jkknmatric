import React from 'react';
import { Link } from 'react-router-dom';
import MainSlider from './MainSlider';
import ServicesSection from './ServicesSection';
import PodcastSection from './PodcastSection';
import SchoolNews from './SchoolNews';
import EventsSection from './EventsSection';
import CounterSection from './CounterSection';
import CtaSection from './CtaSection';
import AccordionSection from './AccordionSection';
import ClientsSection from './ClientsSection';

const Home: React.FC = () => {
  return (
    <>
      {/* Main Slider */}
      <MainSlider />

      {/* Services Section */}
      <ServicesSection />

      {/* Podcast Section */}
      <PodcastSection />

      {/* School News Section */}
      <SchoolNews />

      {/* Events Section */}
      <EventsSection />

      {/* Counter Section */}
      <CounterSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Accordion Section */}
      <AccordionSection />

      {/* Clients Section */}
      <ClientsSection />
    </>
  );
};

export default Home; 