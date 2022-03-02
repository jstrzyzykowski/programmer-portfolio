import React, {useState} from 'react';
import {Tooltip, TooltipProps, OverlayTrigger, Button} from 'react-bootstrap';

import './contact-social-item.styles.scss';

interface ContactSocialItemProps {
  textToCopy: string,
  iconClass: string,
}

export default function ContactSocialItem({textToCopy, iconClass}: ContactSocialItemProps): JSX.Element {

  // const renderTooltip = (props: TooltipProps) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     Copy
  //   </Tooltip>
  // );

  const [isCopyInfoVisible, setIsCopyInfoVisible] = useState(false);

  const copy = (): void => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopyInfoVisible(true);
    setTimeout(() => {
      setIsCopyInfoVisible(false);
    }, 500);
  }

  return (
    <div className="contactSocialItem">
      <i className={iconClass}/>
      <p className="contactSocialItem__text">{textToCopy}</p>
      {/*<OverlayTrigger*/}
      {/*  placement="left"*/}
      {/*  delay={{ show: 50, hide: 50 }}*/}
      {/*  overlay={renderTooltip}*/}
      {/* >*/}
      <p className={`contactSocialItem__copyInfo ${isCopyInfoVisible ? 'active' : ''}`}>Copied!</p>
      <button className="contactSocialItem__copyBtn"
              onClick={copy}>
        <i className="fas fa-copy"/>
      </button>
      {/*</OverlayTrigger>*/}
    </div>
  );
}