import React from 'react';

import SectionHeader from '../common/section-header/section-header.component';

import './section-contact.styles.scss';
import discordLogo from "../../assets/images/discord-join.png";

export default function SectionContact(): JSX.Element {

  const handleCopyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="contact" id="section-contact">
      <SectionHeader text="Contact"/>
      <div className="contact__content">
        <div className="extra-wrapper">
          <div className="contact__content-desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores ducimus, eos nobis
              perspiciatis
              quo quod sequi sint suscipit temporibus tenetur vero vitae voluptatem.</p>
          </div>
          <a className="contact__content-discord" href="https://discord.gg/uFUQZWgqFC" target="_blank" rel="noopener noreferrer">
            <img src={discordLogo} alt=""/>
          </a>
        </div>
        <div className="contact__content-social">
          <div className="contact__content-social-item">
            <i className="fab fa-discord"/>
            <p>Erambo#5744</p>
            <button className="contact__content-social-item-copyBtn"
                    onClick={(): void => handleCopyToClipboard('Erambo#5744')}>
              <i className="fas fa-copy"/>
            </button>
          </div>
          <div className="contact__content-social-item">
            <i className="fas fa-envelope"/>
            <p>example@email.com</p>
            <button className="contact__content-social-item-copyBtn"
                    onClick={(): void => handleCopyToClipboard('example@email.com')}>
              <i className="fas fa-copy"/>
            </button>
          </div>
          <div className="contact__content-social-item">
            <i className="fab fa-github-alt"/>
            <p>@jstrzyzykowski</p>
            <button className="contact__content-social-item-copyBtn"
                    onClick={(): void => handleCopyToClipboard('@jstrzyzykowski')}>
              <i className="fas fa-copy"/>
            </button>
          </div>
          <div className="contact__content-social-item">
            <i className="fab fa-linkedin-in"/>
            <p>Jakub Strzyzykowski</p>
            <button className="contact__content-social-item-copyBtn"
                    onClick={(): void => handleCopyToClipboard('Jakub Strzyzykowski')}>
              <i className="fas fa-copy"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}