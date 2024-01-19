import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import SocialLink from '../home/social/SocialLink';

function Footer() {
  const footerLinks = [
    'Home',
    'Portfolio',
    'About',
    'Skills',
    'Experience',
    'Contact',
  ];

  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Castro</h1>

        <ul className='footer__list'>
          {footerLinks?.map((link, index) => (
            <li key={index}>
              <a href={`#${link.toLowerCase()}`} className='footer__link'>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className='footer__social'>
          <SocialLink
            link='https://github.com/kevincastrochavez'
            Icon={GitHubIcon}
            footer
          />
          <SocialLink
            link='https://www.linkedin.com/in/kevincastroc0'
            Icon={LinkedInIcon}
            footer
          />
        </div>

        <span className='footer__copy'>&#169; All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
