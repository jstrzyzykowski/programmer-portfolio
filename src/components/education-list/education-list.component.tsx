import React from 'react';

import {IEducation} from '../../api/educations.data';

import EducationListItem from '../education-list-item/education-list-item.component';

import './education-list.styles.scss';

import {EDUCATIONS_DATA} from '../../api/educations.data';

export default function EducationList(): JSX.Element {
  return (
    <div className="educationList">
      {EDUCATIONS_DATA.map((education: IEducation): JSX.Element => <EducationListItem key={education._id} {...education}/>)}
    </div>
  );
}