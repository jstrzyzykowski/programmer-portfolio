import React from 'react';

import './section-contact.styles.scss';
import SectionHeader from '../common/section-header/section-header.component';

import discordJoin from '../../assets/images/discord-join.png';

export default function SectionContact(): JSX.Element {

  const handleCopyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
    console.log(`${text} has been copied to clipboard!`);
  }

  return (
    <section className="contact" id="section-contact">
      <SectionHeader text="Contact" />
      <div className="contact__content">
        <div className="contact__content-desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores ducimus, eos nobis perspiciatis
            quo quod sequi sint suscipit temporibus tenetur vero vitae voluptatem.</p>
        </div>
        <div className="contact__content-social">
          <button className="contact__content-social-discord">
            {/*<img src={discordJoin} alt=""/>*/}
          </button>
          <div className="contact__content-social-item">
            <i className="fab fa-discord"/>
            <p>Erambo#5744</p>
            <button className="contact__content-social-item-copyBtn" onClick={(): void => handleCopyToClipboard('Erambo#5744')}>
              <i className="fas fa-copy" />
            </button>
          </div>
          <div className="contact__content-social-item">
            <i className="fas fa-envelope"/>
            <p>example@email.com</p>
            <button className="contact__content-social-item-copyBtn" onClick={(): void => handleCopyToClipboard('example@email.com')}>
              <i className="fas fa-copy" />
            </button>
          </div>
          <div className="contact__content-social-item">
            <i className="fab fa-github-alt"/>
            <p>@jstrzyzykowski</p>
            <button className="contact__content-social-item-copyBtn" onClick={(): void => handleCopyToClipboard('@jstrzyzykowski')}>
              <i className="fas fa-copy" />
            </button>
          </div>
          <div className="contact__content-social-item">
            <i className="fab fa-linkedin-in"/>
            <p>Jakub Strzyzykowski</p>
            <button className="contact__content-social-item-copyBtn" onClick={(): void => handleCopyToClipboard('Jakub Strzyzykowski')}>
              <i className="fas fa-copy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}