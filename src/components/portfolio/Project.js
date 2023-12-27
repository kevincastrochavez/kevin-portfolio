import React from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Project({ item }) {
  return (
    <div className='project__card' key={item.id}>
      <img src={item.image} alt='' className='project__img' />
      <h3 className='project__title'>{item.title}</h3>
      <a href='#' className='project__button'>
        Demo <ArrowRightAltIcon />
      </a>
    </div>
  );
}

export default Project;
