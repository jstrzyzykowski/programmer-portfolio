import React from 'react';

import {IEducation} from '../../redux/education/education.actions';

import './education-list-item.styles.scss';

export default function EducationListItem({ yearStart, yearFinish, title, description }: IEducation): JSX.Element {
  const yearString = yearFinish ? `${yearStart} - ${yearFinish}` : `${yearStart}`;

  return (
    <div className="educationListItem">
      <div className="educationListItem__iconContainer">
        <i className="fas fa-graduation-cap"/>
      </div>
      <div className="educationListItem__content">
        <p className="educationListItem__content-year">{yearString}</p>
        <p className="educationListItem__content-title">{title}</p>
        <p className="educationListItem__content-description">{description}</p>
      </div>
    </div>
  );
}