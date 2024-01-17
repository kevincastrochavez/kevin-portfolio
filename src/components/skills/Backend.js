import React from 'react';
import SkillData from './SkillData';

function Backend() {
  return (
    <div className='backend__content'>
      <h3 className='backend__title'>Other Skills</h3>

      <div className='backend__box'>
        <div className='backend__group'>
          <SkillData skill='REST APIs' />
          <SkillData skill='Unit Tests' />
          <SkillData skill='Agile/Scrum' />
          <SkillData skill='Figma' />
          <SkillData skill='Three JS' />
        </div>

        <div className='backend__group'>
          <SkillData skill='Firebase' />
          <SkillData skill='Jest' />
          <SkillData skill='Git/GitHub' />
          <SkillData skill='Prototyping' />
          <SkillData skill='Blender' />
        </div>
      </div>
    </div>
  );
}

export default Backend;
