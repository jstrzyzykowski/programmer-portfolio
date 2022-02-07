import React from 'react';

import ThumbTest from '../../assets/images/thumbnails/thumb-the-nine.png';
import staticHtmlIcon from '../../assets/svgs/tools/html.svg';
import staticCssIcon from '../../assets/svgs/tools/css.svg';
import staticJsIcon from '../../assets/svgs/tools/js.svg';

import {IProject} from '../../api/projects.data';

import './project-list-item.styles.scss';
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectListItem({title, thumbnailUrl, tools, liveUrl, codeUrl}: IProject): JSX.Element {
  return (
    <div className="projectListItem">
      <div className="projectListItem__header">
        <div className="projectListItem__header-devices">
          <div className="projectListItem__header-devices-item">
            <i className="fas fa-mobile-alt"/>
          </div>
          <div className="projectListItem__header-devices-item">
            <i className="fas fa-desktop"/>
          </div>
        </div>
        <div className="projectListItem__header-title">
          <p className="projectListItem__header-title-text">{title}</p>
        </div>
      </div>
      {/* WORK IN PROGRESS HERE */}


      <div className="projectListItem__thumbnail">
        {/*<img src={ThumbTest} alt=""/>*/}
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ThumbTest}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ThumbTest}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ThumbTest}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>


      {/* WORK IN PROGRESS HERE */}

      <div className="projectListItem__usedTools">
        {/* ProjectToolList */}
        <div className="projectListItem__usedTools-list">
          <div className="projectListItem__usedTools-list-item">
            <img src={staticHtmlIcon} alt=""/>
          </div>
          <div className="projectListItem__usedTools-list-item">
            <img src={staticCssIcon} alt=""/>
          </div>
          <div className="projectListItem__usedTools-list-item">
            <img src={staticJsIcon} alt=""/>
          </div>
        </div>
        <div className="projectListItem__usedTools-desc">
          <p className="projectListItem__usedTools-desc-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eos, exercitationem fugit necessitatibus nihil
            odit quibusdam rerum.</p>
        </div>
      </div>
      <div className="projectListItem__buttons">
        <a href={liveUrl === '' ? '#' : liveUrl} className={liveUrl === '' ? 'disabled' : ''}>
          <i className="fas fa-eye"/>
          Live
        </a>
        <a href={codeUrl === '' ? '#' : codeUrl} className={codeUrl === '' ? 'disabled' : ''}>
          <i className="fas fa-code"/>
          Code
        </a>
      </div>
    </div>
  );
}