import React from 'react';
import SkillData from './SkillData';

function Frontend() {
  return (
    <div className='frontend__content'>
      <h3 className='frontend__title'>Frontend Developer</h3>

      <div className='frontend__box'>
        <div className='frontend__group'>
          <SkillData skill='HTML5' />
          <SkillData skill='JavaScript' />
          <SkillData skill='AJAX' />
          <SkillData skill='TypeScript' />
          <SkillData skill='React Hooks' />
        </div>

        <div className='frontend__group'>
          <SkillData skill='CSS3' />
          <SkillData skill='SCSS' />
          <SkillData skill='Angular' />
          <SkillData skill='React' />
          <SkillData skill='Context API' />
        </div>
      </div>
    </div>
  );
}

export default Frontend;
