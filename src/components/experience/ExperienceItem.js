import React from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function ExperienceItem({ side, title, subtitle, date }) {
  return (
    <div className='experience__data'>
      {side === 'right' && <div></div>}

      {side === 'right' && (
        <div>
          <span className='experience__rounder'></span>

          <span className='experience__line'></span>
        </div>
      )}

      <div>
        <h3 className='experience__title'>{title}</h3>

        <span className='experience__subtitle'>{subtitle}</span>

        <div className='experience__calendar'>
          <CalendarMonthIcon /> {date}
        </div>
      </div>

      {side === 'left' && (
        <div>
          <span className='experience__rounder'></span>

          <span className='experience__line'></span>
        </div>
      )}
    </div>
  );
}

export default ExperienceItem;
