import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

function Frontend() {
  return (
    <div className='frontend__content'>
      <h3 className='frontend__title'>Frontend Developer</h3>

      <div className='frontend__box'>
        <div className='frontend__group'>
          <div className='frontend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='frontend__name'>HTML5</h3>
              <span className='frontend__level'>Advanced</span>
            </div>
          </div>

          <div className='frontend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='frontend__name'>CSS3</h3>
              <span className='frontend__level'>Advanced</span>
            </div>
          </div>

          <div className='frontend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='frontend__name'>JavaScript</h3>
              <span className='frontend__level'>Advanced</span>
            </div>
          </div>

          <div className='frontend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='frontend__name'>Bootstrap</h3>
              <span className='frontend__level'>Advanced</span>
            </div>
          </div>
        </div>

        <div className='frontend__group'>
          <div className='frontend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='frontend__name'>React</h3>
              <span className='frontend__level'>Advanced</span>
            </div>
          </div>

          <div className='frontend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='frontend__name'>Angular</h3>
              <span className='frontend__level'>Advanced</span>
            </div>
          </div>

          <div className='frontend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='frontend__name'>SCSS</h3>
              <span className='frontend__level'>Advanced</span>
            </div>
          </div>

          <div className='frontend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='frontend__name'>Git</h3>
              <span className='frontend__level'>Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
