import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DriveFileMoveRoundedIcon from '@mui/icons-material/DriveFileMoveRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HeaderLink from './HeaderLink';

import { useHeightScrolled } from '../../utils';

function Header() {
  // TODO: Modify header to a side drawer
  // TODO: Select color for wayfinder
  const [toggleMenu, setToggleMenu] = useState(false);
  const { heightScrolled } = useHeightScrolled();
  const minHeightToShowNavShadow = 30;

  return (
    <header
      className={`header ${
        heightScrolled > minHeightToShowNavShadow && 'header__scrolled'
      }`}
    >
      <nav className='header__nav container'>
        <a href='index.html' className='header__nav-logo'>
          Castro
        </a>

        <div
          className={`${
            !toggleMenu ? 'header__nav-menu' : 'header__nav-showMenu'
          }`}
        >
          <ul className='header__nav-list grid'>
            <HeaderLink link='Home' Icon={HomeRoundedIcon} />
            <HeaderLink link='Portfolio' Icon={ImageRoundedIcon} />
            <HeaderLink link='About' Icon={PersonRoundedIcon} />
            <HeaderLink link='Skills' Icon={DriveFileMoveRoundedIcon} />
            <HeaderLink link='Experience' Icon={WorkRoundedIcon} />
            <HeaderLink link='Contact' Icon={SendRoundedIcon} />
          </ul>

          <CloseRoundedIcon
            className='header__nav-close'
            onClick={() => setToggleMenu(false)}
          />
        </div>

        <div className='header__nav-toggle' onClick={() => setToggleMenu(true)}>
          <MenuRoundedIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
