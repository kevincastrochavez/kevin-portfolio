import React from 'react';
import SkillData from './SkillData';

function Frontend() {
  return (
    <div className='frontend__content'>
      <h3 className='frontend__title'>Frontend Developer</h3>

      <div className='frontend__box'>
        <div className='frontend__group'>
          <SkillData skill='HTML5' />
          <SkillData skill='CSS3' />
          <SkillData skill='JavaScript' />
        </div>

        <div className='frontend__group'>
          <SkillData skill='React' />
          <SkillData skill='SCSS' />
          <SkillData skill='HTML5' />
        </div>
      </div>
    </div>
  );
}

export default Frontend;
