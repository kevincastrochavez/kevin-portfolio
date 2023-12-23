import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Social() {
  return (
    <div className='social'>
      <a
        href='https://github.com/kevincastrochavez'
        className='social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <GitHubIcon />
      </a>
      <a
        href='https://www.linkedin.com/in/kevincastroc0'
        className='social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default Social;
