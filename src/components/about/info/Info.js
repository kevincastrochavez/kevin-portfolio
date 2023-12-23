import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoBox from './InfoBox';

function Info() {
  return (
    <div className='info grid'>
      <InfoBox
        Icon={EmojiEventsIcon}
        title='Experience'
        subtitle='2 years working'
      />
      <InfoBox Icon={WorkIcon} title='Completed' subtitle='48+ Projects' />
      <InfoBox Icon={SupportAgentIcon} title='Support' subtitle='Online 24/7' />
    </div>
  );
}

export default Info;
