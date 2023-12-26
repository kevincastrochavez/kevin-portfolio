import React from 'react';

function SocialLink({ link, Icon, footer = false }) {
  return (
    <a
      href={link}
      className={!footer ? 'social-icon' : 'footer__social-link'}
      target='_blank'
      rel='noreferrer'
    >
      <Icon />
    </a>
  );
}

export default SocialLink;
