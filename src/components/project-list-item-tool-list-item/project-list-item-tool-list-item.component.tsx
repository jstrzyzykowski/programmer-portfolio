import React from 'react';
import {svgs} from '../../assets/svgs/index';

import './project-list-item-tool-list-item.styles.scss';

export interface ProjectListItemToolListItemProps {
  name: string,
}

export default function ProjectListItemToolListItem({name}: ProjectListItemToolListItemProps): JSX.Element {
  return (
    <div className="projectListItemToolListItem">
      <img src={`${svgs[`${name}`]}`} alt={`${name} icon`}/>
    </div>
  );
}