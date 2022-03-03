import React from 'react';

import './test-access-info.styles.scss';

interface TestAccessInfo {
  login: string,
  password:string,
}

export default function TestAccessInfo({login, password}: TestAccessInfo): JSX.Element {
  return (
    <div className="testAccessInfo">
      <div className="testAccessInfo__dataContainer">
        <i className="fa-solid fa-envelope"/>
        <p className="testAccessInfo__dataContainer-dataText">{login}</p>
      </div>
      <div className="testAccessInfo__dataContainer">
        <i className="fa-solid fa-key"/>
        <p className="testAccessInfo__dataContainer-dataText">{password}</p>
      </div>
    </div>
  );
}