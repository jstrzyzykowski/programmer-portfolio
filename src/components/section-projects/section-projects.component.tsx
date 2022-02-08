import React from 'react';

import ProjectList from '../project-list/project-list.component';
import SectionHeader from '../common/section-header/section-header.component';

import './section-projects.styles.scss';

export default function SectionProjects(): JSX.Element {
  return (
    <section className="projects" id="section-projects">
      <SectionHeader text="Projects" />
      <div className="projects__content">
        <ProjectList/>
      </div>
    </section>
  );
}