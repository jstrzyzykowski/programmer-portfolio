import React from 'react';

import SectionHeader from '../common/section-header/section-header.component';
import EducationList from '../education-list/education-list.component';

import './section-about.styles.scss';

export default function SectionAbout(): JSX.Element {
  return (
    <section className="education" id="section-education">
      <SectionHeader text="Education"/>
      <div className="education__content">
        <EducationList/>
      </div>
    </section>
  );
}