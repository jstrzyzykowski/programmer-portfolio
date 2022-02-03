import React from 'react';

import './section-contact.styles.scss';

export default function SectionContact(): JSX.Element {
  return (
    <section className="contact">
      <div className="contact__header">
        <h2>Contact</h2>
      </div>
      <div className="contact__content">
        <div className="contact__content-desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores ducimus, eos nobis perspiciatis
            quo quod sequi sint suscipit temporibus tenetur vero vitae voluptatem.</p>
        </div>
        <div className="contact__content-social">
          <div className="contact__content-social-item">
            <i className="fab fa-discord"/>
            <p>Erambo#5744</p>
          </div>
          <div className="contact__content-social-item">
            <i className="fas fa-envelope"/>
            <p>example@email.com</p>
          </div>
          <div className="contact__content-social-item">
            <i className="fab fa-github-alt"/>
            <p>@jstrzyzykowski</p>
          </div>
          <div className="contact__content-social-item">
            <i className="fab fa-linkedin-in"/>
            <p>Jakub Strzyzykowski</p>
          </div>
        </div>
      </div>
    </section>
  );
}