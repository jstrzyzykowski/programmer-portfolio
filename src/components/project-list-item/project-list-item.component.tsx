import React from 'react';

import ProjectListItemCarousel from '../project-list-item-carousel/project-list-item-carousel.component';
import ProjectListItemToolList from '../project-list-item-tool-list/project-list-item-tool-list.component';

import {IProject} from '../../api/projects.data';

import './project-list-item.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestAccessInfo from '../test-access-info/test-access-info.component';

export default function ProjectListItem(props: IProject): JSX.Element {
  return (
    <div className="projectListItem">
      <div className="projectListItem__header">
        <div className="projectListItem__header-devices">
          <div className={`projectListItem__header-devices-item ${props.hasMobileVersion ? 'available' : ''}`}>
            <i className="fas fa-mobile-alt"/>
          </div>
          <div className={`projectListItem__header-devices-item ${props.hasDesktopVersion ? 'available' : ''}`}>
            <i className="fas fa-desktop"/>
          </div>
        </div>
        <div className="projectListItem__header-title">
          <p className="projectListItem__header-title-text">{props.title}</p>
        </div>
      </div>
      <div className="projectListItem__thumbnail">
       <ProjectListItemCarousel images={props.screenshots}/>
      </div>
      <div className="projectListItem__usedTools">
        <ProjectListItemToolList usedTools={props.tools}/>
        <div className="projectListItem__usedTools-desc">
          <p className="projectListItem__usedTools-desc-text">{props.description}</p>
          {props.testAccess && <TestAccessInfo {...props.testAccess}/>}
        </div>
      </div>
      <div className="projectListItem__buttons">
        <a href={props.liveUrl === '' ? '#' : props.liveUrl} target="_blank" rel="noopener noreferrer" className={props.liveUrl === '' ? 'disabled' : ''}>
          <i className="fas fa-eye"/>
          Live
        </a>
        <a href={props.codeUrl === '' ? '#' : props.codeUrl} target="_blank" rel="noopener noreferrer" className={props.codeUrl === '' ? 'disabled' : ''}>
          <i className="fas fa-code"/>
          Code
        </a>
      </div>
    </div>
  );
}