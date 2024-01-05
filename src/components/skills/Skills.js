import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';

function Skills() {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My Technical Level</span>

      <div className='skills__container container grid'>
        {/* TODO: Include appropriate skills */}
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
