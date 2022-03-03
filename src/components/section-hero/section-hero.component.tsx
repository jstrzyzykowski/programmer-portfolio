import React from 'react';
import Emoji from 'a11y-react-emoji';

import avatarAnimated from '../../assets/gifs/avatar-animated.gif';
import avatar_1 from '../../assets/images/avatar_1.jpg';
import avatar_2 from '../../assets/images/avatar_2.jpg';

import './section-hero.styles.scss';

export default function SectionHero(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero__layer"/>
      <div className="hero__content">
        <div className="hero__content-person">
          <div className="hero__content-person-avatar">
            <img src={avatar_2} alt=""/>
          </div>
          <div className="hero__content-person-fullName">
            <p>Jakub Strzyżykowski</p>
          </div>
          <div className="hero__content-person-social">
            <a className="hero__content-person-social-btn" href="https://github.com/jstrzyzykowski" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-alt"/>
              <i className="fab fa-github-alt"/>
            </a>
            <a className="hero__content-person-social-btn" href="https://www.linkedin.com/in/jakub-strzyzykowski/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"/>
              <i className="fab fa-linkedin-in"/>
            </a>
            <a className="hero__content-person-social-btn" href="mailto: jakub.strzyzykowski@example.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"/>
              <i className="fas fa-envelope"/>
            </a>
          </div>
        </div>
        <div className="hero__content-description">
          <p className="hero__content-description-text">
            Projektowanie i wytwarzanie aplikacji to dla mnie mega zabawa z questami i challengami. Programista a
            ponadto nauczyciel, trener i wychowawca, dlatego jeszcze bardziej od self-study uwielbiam przekazywać wiedzę
            innym a w szczególności najmłodszym, których zawsze uważam za największych!
            {' '}
            <Emoji symbol="😁" label="beaming face with smiling eyes" />
            <Emoji symbol="💪" label="flexed biceps" />
          </p>
        </div>
      </div>
    </section>
  );
}