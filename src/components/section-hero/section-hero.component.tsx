import React from 'react';

import heroImage from '../../assets/images/hero.png';

import './section-hero.styles.scss';

export default function SectionHero(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__content-text">
          <p className="hero__content-text-title">Lorem ipsum dolor</p>
          <p className="hero__content-text-fullName">Jakub Strzyzykowski</p>
          <p className="hero__content-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta
            ducimus non qui vero. Accusantium
            incidunt magnam mollitia neque non quo sed temporibus voluptas!</p>
        </div>
        <div className="hero__content-image">
          <img src={heroImage} alt=""/>
        </div>
      </div>
    </section>
  );
}