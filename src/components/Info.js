import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Info() {
  return (
    <div className='info grid'>
      <div className='info__box'>
        <EmojiEventsIcon className='info__icon' />
        <h3 className='info__title'>Experience</h3>
        <span className='info__subtitle'>2 years working</span>
      </div>

      <div className='info__box'>
        <WorkIcon className='info__icon' />
        <h3 className='info__title'>Completed</h3>
        <span className='info__subtitle'>48+ Projects</span>
      </div>

      <div className='info__box'>
        <SupportAgentIcon className='info__icon' />
        <h3 className='info__title'>Support</h3>
        <span className='info__subtitle'>Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
