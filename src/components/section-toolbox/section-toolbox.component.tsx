import React from 'react';

import ToolList from '../tool-list/tool-list.component';

import './section-toolbox.styles.scss';
import SectionHeader from '../common/section-header/section-header.component';

export default function SectionToolbox(): JSX.Element {
  return (
    <section className="toolbox" id="section-toolbox">
      <SectionHeader text="Toolbox" />
      <div className="toolbox__content">
        <ToolList/>
      </div>
    </section>
  );
}