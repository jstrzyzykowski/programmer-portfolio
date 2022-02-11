import React from 'react';

import ToolListItem, {ToolListItemProps} from '../tool-list-item/tool-list-item.component';

import {TOOLS_DATA} from '../../api/tools.data';

import './tool-list.styles.scss';

export default function ToolList(): JSX.Element {
  return (
    <div className="toolList">
      {TOOLS_DATA.map((tool: ToolListItemProps): JSX.Element => <ToolListItem key={tool.id} {...tool}/>)}
    </div>
  );
}