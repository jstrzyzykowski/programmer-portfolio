import React from 'react';

import ToolList from '../tool-list/tool-list.component';

import SectionHeader from '../common/section-header/section-header.component';

import './section-toolbox.styles.scss';

export default function SectionToolbox(): JSX.Element {
  return (
    <section className="toolbox" id="section-toolbox">
      <SectionHeader text="Narzędzia" />
      <div className="toolbox__content">
        <ToolList/>
      </div>
    </section>
  );
}