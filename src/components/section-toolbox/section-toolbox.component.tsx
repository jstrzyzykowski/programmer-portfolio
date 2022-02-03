import React from 'react';

import ToolList from '../tool-list/tool-list.component';

import './section-toolbox.styles.scss';

export default function SectionToolbox(): JSX.Element {
  return (
    <section className="toolbox">
      <div className="toolbox__header">
        <h2>Toolbox</h2>
      </div>
      <div className="toolbox__content">
        <ToolList/>
      </div>
    </section>
  );
}