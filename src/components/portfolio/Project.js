import React from 'react';

import { Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

function Project({ item }) {
  return (
    <div className='project__card' key={item.id}>
      <Swiper
        pagination={true}
        className='project__img'
        effect={'fade'}
        loop={true}
        modules={[EffectFade, Pagination]}
      >
        {item.images?.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt={image} key={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className='project__title'>{item.title}</h3>
      <div className='project__actions'>
        {item?.githubLink && (
          <Tooltip title='GitHub repository'>
            <a
              className='project__link'
              target='_blank'
              href={item.githubLink}
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
          </Tooltip>
        )}
        {!item?.isOwnApp && (
          <Tooltip title={item.infoMessage}>
            <InfoIcon />
          </Tooltip>
        )}

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
