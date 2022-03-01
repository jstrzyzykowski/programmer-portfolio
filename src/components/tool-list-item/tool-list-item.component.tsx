import React from 'react';

import './tool-list-item.styles.scss';

export interface ToolListItemProps {
  id: number,
  svgPath: string,
  displayName: string,
}

export default function ToolListItem({svgPath, displayName}: ToolListItemProps): JSX.Element {
  return (
    <div className="toolListItem">
      <div className="toolListItem__icon">
        <img src={`https://localhost:5000${svgPath}`} alt={`${displayName} icon`}/>
      </div>
      <div className="toolListItem__desc">
        <p className="toolListItem__desc-displayName">{displayName}</p>
        {/*<p className="toolListItem__desc-additionalInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
          {/*Doloremque labore perferendis tempore.</p>*/}
      </div>
    </div>
  );
}