import React from 'react';
import Emoji from 'a11y-react-emoji';

import {IEducation} from '../../api/educations.data';

import './education-list-item.styles.scss';

export default function EducationListItem({ thumbnailUrl, yearStart, yearFinish, title, description }: IEducation): JSX.Element {
  const yearString = yearFinish ? `${yearStart} - ${yearFinish}` : `${yearStart}`;

  return (
    <div className="educationListItem">
      <div className="educationListItem__imageContainer">
        <img src={thumbnailUrl} alt=""/>
      </div>
      <div className="educationListItem__descContainer">
        <div className="educationListItem__descContainer-iconContainer">
          <i className="fas fa-graduation-cap"/>
        </div>
        <div className="educationListItem__descContainer-content">
          <p className="educationListItem__descContainer-content-year">{yearString}</p>
          <p className="educationListItem__descContainer-content-title">{title}</p>
          <p className="educationListItem__descContainer-content-description">
            {/*<Emoji symbol="🏆" label="trophy"/>*/}
            {/*{` `}*/}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}