import React from 'react';

import './project-list-item-tool-list-item.styles.scss';

export interface ProjectListItemToolListItemProps {
  name: string,
}

export default function ProjectListItemToolListItem({name}: ProjectListItemToolListItemProps): JSX.Element {
  return (
    <div className="projectListItemToolListItem">
      <img src={`http://localhost:5000/static/svgs/${name}.svg`} alt={`${name} icon`}/>
    </div>
  );
}