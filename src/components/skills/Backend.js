import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

function Backend() {
  return (
    <div className='backend__content'>
      <h3 className='backend__title'>Backend Developer</h3>

      <div className='backend__box'>
        <div className='backend__group'>
          <div className='backend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='backend__name'>Node JS</h3>
              <span className='backend__level'>Advanced</span>
            </div>
          </div>

          <div className='backend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='backend__name'>PHP</h3>
              <span className='backend__level'>Advanced</span>
            </div>
          </div>

          <div className='backend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='backend__name'>C#</h3>
              <span className='backend__level'>Advanced</span>
            </div>
          </div>

          <div className='backend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='backend__name'>Python</h3>
              <span className='backend__level'>Advanced</span>
            </div>
          </div>
        </div>

        <div className='backend__group'>
          <div className='backend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='backend__name'>Firebase</h3>
              <span className='backend__level'>Advanced</span>
            </div>
          </div>

          <div className='backend__data'>
            <VerifiedIcon />

            <div>
              <h3 className='backend__name'>MYSQL</h3>
              <span className='backend__level'>Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
