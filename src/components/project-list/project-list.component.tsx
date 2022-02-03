import React from 'react';

import {projectsData, IProject} from '../../api/projects.data';

import ProjectListItem from '../project-list-item/project-list-item.component';

import './project-list.styles.scss';

export default function ProjectList(): JSX.Element {
  return (
    <div className="projectList">
      { projectsData.map((project: IProject): JSX.Element => <ProjectListItem key={project.id} {...project}/>) }
    </div>
  );
}