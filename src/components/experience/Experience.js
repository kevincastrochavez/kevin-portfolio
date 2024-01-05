import React, { useState } from 'react';

import SchoolIcon from '@mui/icons-material/School';

import WorkIcon from '@mui/icons-material/Work';
import ExperienceItem from './ExperienceItem';

// TODO: Include real education and work experience
// TODO: Give it some color
const educationList = [
  {
    side: 'left',
    title: 'Software Engineer',
    subtitle: 'BYU-I - USA',
    date: '2021 - Present',
    id: 1,
  },
  {
    side: 'right',
    title: 'Teaching Assistant',
    subtitle: 'BYU-I',
    date: '2021 - Present',
    id: 2,
  },
  {
    side: 'left',
    title: 'Software Engineer',
    subtitle: 'BYU-I - USA',
    date: '2021 - Present',
    id: 3,
  },
  {
    side: 'right',
    title: 'Teaching Assistant',
    subtitle: 'BYU-I',
    date: '2021 - Present',
    id: 4,
  },
];

const workList = [
  {
    side: 'left',
    title: 'Software Engineer',
    subtitle: 'BYU-I - USA',
    date: '2021 - Present',
    id: 5,
  },
  {
    side: 'right',
    title: 'Teaching Assistant',
    subtitle: 'BYU-I',
    date: '2021 - Present',
    id: 6,
  },
  {
    side: 'left',
    title: 'Software Engineer',
    subtitle: 'BYU-I - USA',
    date: '2021 - Present',
    id: 7,
  },
];

function Experience() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='experience section' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='experience__container container'>
        <div className='experience__tabs'>
          <div
            className={
              toggleState === 1
                ? 'experience__button experience__active button--flex'
                : 'experience__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            {' '}
            <SchoolIcon /> Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'experience__button experience__active button--flex'
                : 'experience__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            {' '}
            <WorkIcon /> Work
          </div>
        </div>

        <div className='experience__sections'>
          <div
            className={
              toggleState === 1
                ? 'experience__content experience__content-active'
                : 'experience__content'
            }
          >
            {educationList?.map((item) => (
              <ExperienceItem {...item} key={item.id} />
            ))}
          </div>

          <div
            className={
              toggleState === 2
                ? 'experience__content experience__content-active'
                : 'experience__content'
            }
          >
            {workList?.map((item) => (
              <ExperienceItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
