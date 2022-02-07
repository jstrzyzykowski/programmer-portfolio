import React from 'react';

import SectionHeader from '../common/section-header/section-header.component';

import './section-about.styles.scss';

export default function SectionAbout(): JSX.Element {
  return (
    <section className="about" id="section-about">
      <SectionHeader text="About" />
      <div className="about__content">
      </div>
    </section>
  );
}