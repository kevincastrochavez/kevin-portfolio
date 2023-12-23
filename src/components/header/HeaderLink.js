import React from 'react';

function HeaderLink({ link, Icon }) {
  const linkTo = link.toLowerCase();

  return (
    <li className='header__nav-item'>
      <a href={`#${linkTo}`} className='header__nav-link active-link'>
        <Icon className='header__nav-icon uil' /> {link}
      </a>
    </li>
  );
}

export default HeaderLink;
