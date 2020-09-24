import React, { useEffect } from 'react';
import './App.css';
import SectionHome from './components/SectionHome';
import Header from './components/Header';
import About from './components/SectionAbout';
import SkillsEducation from './components/SectionSkillsEducation';
import Career from './components/SectionCareer';
import PortfolioSection from './components/SectionPortfolio';
import ContactSection from './components/SectionContact';
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import { init } from 'emailjs-com';

function App() {
  useEffect(function() {
    // Initializing emailJS
    init("user_D6Whn8ZWKEkuy23eNghGk");
  }, [])
  
  return (
    <div className=".container-fluid">
      <SectionHome />
      <Element name="header"></Element>
      <Header />
      <Element name="about"></Element>
      <About />
      <Element name="career"></Element>
      <Career />
      <Element name="skills"></Element>
      <SkillsEducation />
      <Element name="portfolio"></Element>
      <PortfolioSection />
      <Element name="contact"></Element>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
