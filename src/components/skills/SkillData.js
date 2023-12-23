import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

function SkillData({ skill }) {
  return (
    <div className='frontend__data'>
      <VerifiedIcon />

      <div>
        <h3 className='frontend__name'>{skill}</h3>
      </div>
    </div>
  );
}

export default SkillData;
