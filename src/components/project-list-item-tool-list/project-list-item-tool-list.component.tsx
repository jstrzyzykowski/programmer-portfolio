import React from 'react';

import ProjectListItemToolListItem
  from '../project-list-item-tool-list-item/project-list-item-tool-list-item.component';

import './project-list-item-tool-list.styles.scss';

export interface ProjectListItemToolListProps {
  usedTools: string[],
}

export default function ProjectListItemToolList(props: ProjectListItemToolListProps): JSX.Element {
  return (
    <div className='projectListItemToolList'>
      { props.usedTools.map((tool: string) => <ProjectListItemToolListItem key={tool} name={tool}/>) }
    </div>
  );
}