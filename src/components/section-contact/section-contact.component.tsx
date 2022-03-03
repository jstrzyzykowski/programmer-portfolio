import React from 'react';
import Emoji from 'a11y-react-emoji';

import SectionHeader from '../common/section-header/section-header.component';

import './section-contact.styles.scss';
import discordLogo from '../../assets/images/discord-join.png';
import ContactSocialItem from '../common/contact-social-item/contact-social-item.component';

export default function SectionContact(): JSX.Element {

  const handleCopyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="contact" id="section-contact">
      <SectionHeader text="Kontakt"/>
      <div className="contact__content">
        <div className="extra-wrapper">
          <div className="contact__content-desc">
            <p>Więcej informacji na profilu LinkedIn. W celu kontaktu proszę o wysłanie wiadomości email bądź kierowanie
              się bezpośrednio na serwer Discord. Bardzo możliwe, że właśnie tam jestem
              {` `}
              <Emoji symbol="😄" label="smiling face with smiling eyes"/>
              <Emoji symbol="✌" label="victory hand"/>
            </p>
          </div>
          <a className="contact__content-discord" href="https://discord.gg/uFUQZWgqFC" target="_blank"
             rel="noopener noreferrer">
            <img src={discordLogo} alt=""/>
          </a>
        </div>
        <div className="contact__content-social">
          {/*<div className="contact__content-social-item">*/}
          {/*  <i className="fab fa-discord"/>*/}
          {/*  <p>Erambo#5744</p>*/}
          {/*  <button className="contact__content-social-item-copyBtn"*/}
          {/*          onClick={(): void => handleCopyToClipboard('Erambo#5744')}>*/}
          {/*    <i className="fas fa-copy"/>*/}
          {/*  </button>*/}
          {/*</div>*/}
          <ContactSocialItem textToCopy="Payro#5744" iconClass="fab fa-discord"/>
          <ContactSocialItem textToCopy="jakub.strzyzykowski@email.com" iconClass="fas fa-envelope"/>
          <ContactSocialItem textToCopy="@jstrzyzykowski" iconClass="fab fa-github-alt"/>
          <ContactSocialItem textToCopy="Jakub Strzyzykowski" iconClass="fab fa-linkedin-in"/>
          {/*<div className="contact__content-social-item">*/}
          {/*  <i className="fas fa-envelope"/>*/}
          {/*  <p>example@email.com</p>*/}
          {/*  <button className="contact__content-social-item-copyBtn"*/}
          {/*          onClick={(): void => handleCopyToClipboard('example@email.com')}>*/}
          {/*    <i className="fas fa-copy"/>*/}
          {/*  </button>*/}
          {/*</div>*/}
          {/*<div className="contact__content-social-item">*/}
          {/*  <i className="fab fa-github-alt"/>*/}
          {/*  <p>@jstrzyzykowski</p>*/}
          {/*  <button className="contact__content-social-item-copyBtn"*/}
          {/*          onClick={(): void => handleCopyToClipboard('@jstrzyzykowski')}>*/}
          {/*    <i className="fas fa-copy"/>*/}
          {/*  </button>*/}
          {/*</div>*/}
          {/*<div className="contact__content-social-item">*/}
          {/*  <i className="fab fa-linkedin-in"/>*/}
          {/*  <p>Jakub Strzyzykowski</p>*/}
          {/*  <button className="contact__content-social-item-copyBtn"*/}
          {/*          onClick={(): void => handleCopyToClipboard('Jakub Strzyzykowski')}>*/}
          {/*    <i className="fas fa-copy"/>*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}