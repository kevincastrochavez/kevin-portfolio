import React from 'react';

import { Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Project({ item }) {
  return (
    <div className='project__card' key={item.id}>
      <img src={item.image} alt='' className='project__img' />
      <h3 className='project__title'>{item.title}</h3>
      <div className='project__actions'>
        <Tooltip title='GitHub repository'>
          <a
            className='project__link'
            target='_blank'
            href={item?.githubLink}
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
        </Tooltip>

        <Tooltip title='View Live Site'>
          <a
            className='project__link'
            target='_blank'
            href={item?.liveSiteLink}
            rel='noreferrer'
          >
            <VisibilityIcon />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

export default Project;
