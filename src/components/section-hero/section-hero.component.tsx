import React from 'react';

import avatarAnimated from '../../assets/gifs/avatar-animated.gif';

import './section-hero.styles.scss';

export default function SectionHero(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero__layer"/>
      <div className="hero__content">
        <div className="hero__content-person">
          <div className="hero__content-person-avatar">
            <img src={avatarAnimated} alt=""/>
          </div>
          <div className="hero__content-person-fullName">
            <p>Jakub Strzyzykowski</p>
          </div>
          <div className="hero__content-person-social">
            <button className="hero__content-person-social-btn">
              <i className="fab fa-github-alt"/>
              <i className="fab fa-github-alt"/>
            </button>
            <button className="hero__content-person-social-btn">
              <i className="fab fa-linkedin-in"/>
              <i className="fab fa-linkedin-in"/>
            </button>
            <button className="hero__content-person-social-btn">
              <i className="fas fa-envelope"/>
              <i className="fas fa-envelope"/>
            </button>
          </div>
        </div>
        <div className="hero__content-description">
          <p className="hero__content-description-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet impedit necessitatibus optio quas totam! Ab
            assumenda commodi doloremque est fugit illum ipsum libero molestias reiciendis voluptatibus!
          </p>
        </div>
      </div>
    </section>
  );
}