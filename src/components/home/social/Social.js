import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialLink from './SocialLink';

function Social() {
  return (
    <div className='social'>
      <SocialLink
        link='https://github.com/kevincastrochavez'
        Icon={GitHubIcon}
      />
      <SocialLink
        link='https://www.linkedin.com/in/kevincastroc0'
        Icon={LinkedInIcon}
      />
    </div>
  );
}

export default Social;
