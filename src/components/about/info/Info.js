import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import InfoBox from './InfoBox';

function Info() {
  return (
    <div className='info grid'>
      <InfoBox Icon={CodeIcon} title='Web Dev' subtitle='Web Applications' />
      <InfoBox
        Icon={ViewInArIcon}
        title='3D Objects'
        subtitle='Design & Modeling'
      />
      <InfoBox Icon={WorkIcon} title='Experience' subtitle='2 years working' />
    </div>
  );
}

export default Info;
