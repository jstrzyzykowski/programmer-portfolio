import React from 'react';

import SectionHeader from '../common/section-header/section-header.component';

import './section-about.styles.scss';

export default function SectionAbout(): JSX.Element {
  return (
    <section className="education" id="section-education">
      <SectionHeader text="Education"/>
      <div className="education__content">
        <div className="education__content-item">
          <div className="education__content-item-icon">
            <i className="fas fa-graduation-cap"/>
          </div>
          <div className="education__content-item-content">
            <p className="education__content-item-content-year">2022</p>
            <p className="education__content-item-content-title">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
            <p className="education__content-item-content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
        <div className="education__content-item">
          <div className="education__content-item-icon">
            <i className="fas fa-graduation-cap"/>
          </div>
          <div className="education__content-item-content">
            <p className="education__content-item-content-year">2017-2021</p>
            <p className="education__content-item-content-title">Akademia im. Jakuba z Paradyża w Gorzowie
              Wielkopolskim</p>
            <p className="education__content-item-content-description">Bachelor's degree, Computer Science, Very Good,
              graduated with honors</p>
          </div>
        </div>
        <div className="education__content-item">
          <div className="education__content-item-icon">
            <i className="fas fa-graduation-cap"/>
          </div>
          <div className="education__content-item-content">
            <p className="education__content-item-content-year">2015-2015</p>
            <p className="education__content-item-content-title">EF International Language Campuses</p>
            <p className="education__content-item-content-description">English language, London</p>
          </div>
        </div>
        <div className="education__content-item">
          <div className="education__content-item-icon">
            <i className="fas fa-graduation-cap"/>
          </div>
          <div className="education__content-item-content">
            <p className="education__content-item-content-year">2015-2020</p>
            <p className="education__content-item-content-title">Akademia Wychowania Fizycznego im. Eugeniusza
              Piaseckiego w Poznaniu</p>
            <p className="education__content-item-content-description">Bachelor's degree, Physical Education,
              Distinction for charity work for children and youth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}