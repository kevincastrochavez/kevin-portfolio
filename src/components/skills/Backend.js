import React from 'react';
import SkillData from './SkillData';

function Backend() {
  return (
    <div className='backend__content'>
      <h3 className='backend__title'>Backend Developer</h3>

      <div className='backend__box'>
        <div className='backend__group'>
          <SkillData skill='Node JS' />
          <SkillData skill='PHP' />
          <SkillData skill='C#' />
        </div>

        <div className='backend__group'>
          <SkillData skill='Python' />
          <SkillData skill='Firebase' />
          <SkillData skill='MYSQL' />
        </div>
      </div>
    </div>
  );
}

export default Backend;
