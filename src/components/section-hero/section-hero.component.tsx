import React from 'react';

import './section-hero.styles.scss';
import avatarAnimated from '../../assets/gifs/avatar-animated.gif';

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


        {/*<div className="hero__content-text">*/}
        {/*  <p className="hero__content-text-title">Lorem ipsum dolor</p>*/}
        {/*  <p className="hero__content-text-fullName">Jakub Strzyzykowski</p>*/}
        {/*  <p className="hero__content-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta*/}
        {/*    ducimus non qui vero. Accusantium*/}
        {/*    incidunt magnam mollitia neque non quo sed temporibus voluptas!</p>*/}
        {/*</div>*/}
        {/*<div className="hero__content-image">*/}
        {/*  <img src={heroImage} alt=""/>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}