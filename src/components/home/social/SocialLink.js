import React from 'react';

function SocialLink({ link, Icon }) {
  return (
    <a href={link} className='social-icon' target='_blank' rel='noreferrer'>
      <Icon />
    </a>
  );
}

export default SocialLink;
