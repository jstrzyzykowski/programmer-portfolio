import React from 'react';

import Navbar from './components/navbar/navbar.component';
import SectionHero from './components/section-hero/section-hero.component';
import SectionAbout from './components/section-about/section-about.component';
import SectionToolbox from './components/section-toolbox/section-toolbox.component';
import SectionProjects from './components/section-projects/section-projects.component';
import SectionContact from './components/section-contact/section-contact.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SectionHero/>
      <SectionAbout/>
      <SectionToolbox/>
      <SectionProjects/>
      <SectionContact/>
      <Footer/>
    </div>
  );
}

export default App;
