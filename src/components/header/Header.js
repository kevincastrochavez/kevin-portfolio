import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DriveFileMoveRoundedIcon from '@mui/icons-material/DriveFileMoveRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Header() {
  return (
    <header className='header'>
      <nav className='header__nav container'>
        <a href='index.html' className='header__nav-logo'>
          Castro
        </a>

        <div className='header__nav-menu'>
          <ul className='header__nav-list grid'>
            <li className='header__nav-item'>
              <a href='#home' className='header__nav-link'>
                <HomeRoundedIcon className='header__nav-icon uil' /> Home
              </a>
            </li>

            <li className='header__nav-item'>
              <a href='#about' className='header__nav-link'>
                <PersonRoundedIcon className='header__nav-icon uil' /> About
              </a>
            </li>

            <li className='header__nav-item'>
              <a href='#skills' className='header__nav-link'>
                <DriveFileMoveRoundedIcon className='header__nav-icon uil' />{' '}
                Skills
              </a>
            </li>

            <li className='header__nav-item'>
              <a href='#services' className='header__nav-link'>
                <WorkRoundedIcon className='header__nav-icon uil' /> Services
              </a>
            </li>

            <li className='header__nav-item'>
              <a href='#portfolio' className='header__nav-link'>
                <ImageRoundedIcon className='header__nav-icon uil' /> Portfolio
              </a>
            </li>

            <li className='header__nav-item'>
              <a href='#contact' className='header__nav-link'>
                <SendRoundedIcon className='header__nav-icon uil' /> Contact
              </a>
            </li>
          </ul>

          <CloseRoundedIcon />
        </div>

        <div className='header__nav-toggle'>
          <MenuRoundedIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
