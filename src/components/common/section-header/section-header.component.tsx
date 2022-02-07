import React from 'react';

import './section-header.styles.scss';

export interface SectionHeaderProps {
  text: string
}

export default function SectionHeader({text}: SectionHeaderProps): JSX.Element {
  return (
    <div className="sectionHeader">
      {/*<i className="fas fa-code-branch"/>*/}
      {/*<a href="#about">*/}
      {/*  <i className="fas fa-hashtag"/>*/}
      {/*</a>*/}
      <i className="fas fa-hashtag"/>
      <h2 className="sectionHeader__text">{text}</h2>
    </div>
  );
}