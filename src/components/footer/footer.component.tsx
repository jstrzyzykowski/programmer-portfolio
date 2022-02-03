import React from 'react';

import './footer.styles.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content-author">&copy; 2022 All rights reserved - <span>Jakub Strzyzykowski</span></p>
      </div>
    </footer>
  );
}