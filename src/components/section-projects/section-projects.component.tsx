import React from 'react';

import ProjectList from '../project-list/project-list.component';

import './section-projects.styles.scss';

export default function SectionProjects(): JSX.Element {
  return (
    <section className="projects">
      <div className="projects__header">
        <h2>Projects</h2>
      </div>
      <div className="projects__content">
        <ProjectList/>
        <button className="projects__content-moreBtn">
          More
        </button>
      </div>
    </section>
  );
}