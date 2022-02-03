import React from 'react';

import avatar from '../../assets/images/avatar.jpg';

import './section-about.styles.scss';

export default function SectionAbout(): JSX.Element {
  return (
    <section className="about">
      <div className="about__header">
        <h2>About</h2>
      </div>
      <div className="about__content">
        <div className="about__content-person">
          <div className="about__content-person-avatar">
            <img src={avatar} alt=""/>
          </div>
          <div className="about__content-person-fullName">
            <p>Jakub Strzyzykowski</p>
          </div>
          <div className="about__content-person-social">
            <div className="about__content-person-social-item">
              <i className="fab fa-github-alt"/>
            </div>
            <div className="about__content-person-social-item">
              <i className="fab fa-linkedin-in"/>
            </div>
            <div className="about__content-person-social-item">
              <i className="fas fa-envelope"/>
            </div>
          </div>
        </div>
        <div className="about__content-description">
          <p className="about__content-description-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet impedit necessitatibus optio quas totam! Ab
            assumenda commodi doloremque est fugit illum ipsum libero molestias reiciendis voluptatibus!
          </p>
        </div>
      </div>
    </section>
  );
}