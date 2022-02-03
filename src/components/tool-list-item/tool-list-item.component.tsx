import React from 'react';

import './tool-list-item.styles.scss';

import htmlIcon from '../../assets/svgs/tools/html.svg';

export interface ToolListItemProps {
  id: number,
  svgName: string,
  displayName: string,
}

export default function ToolListItem({svgName, displayName}: ToolListItemProps): JSX.Element {
  return (
    <div className="toolListItem">
      <div className="toolListItem__icon">
        <img src={htmlIcon} alt={`${svgName} icon`}/>
      </div>
      <div className="toolListItem__desc">
        <p className="toolListItem__desc-displayName">{displayName}</p>
        <p className="toolListItem__desc-additionalInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque labore perferendis tempore.</p>
        {/*<div className="toolListItem__bar">*/}
        {/*  <div className="toolListItem__bar-progress"/>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}