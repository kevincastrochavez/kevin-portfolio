import React from 'react';

function InfoBox({ Icon, title, subtitle }) {
  return (
    <div className='info__box'>
      <Icon className='info__icon' />
      <h3 className='info__title'>{title}</h3>
      <span className='info__subtitle'>{subtitle}</span>
    </div>
  );
}

export default InfoBox;
