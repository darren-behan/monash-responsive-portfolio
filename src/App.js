import React from 'react';
import './App.css';
import SectionHome from './components/SectionHome';
import Header from './components/Header';
import About from './components/SectionAbout';
import SkillsEducation from './components/SectionSkillsEducation';
import Career from './components/SectionCareer';
import PortfolioSection from './components/SectionPortfolio';
import ContactSection from './components/SectionContact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className=".container-fluid">
      <SectionHome />
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
    </div>
  );
}

export default App;
