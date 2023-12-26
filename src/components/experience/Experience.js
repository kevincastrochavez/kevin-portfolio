import React, { useState } from 'react';

import SchoolIcon from '@mui/icons-material/School';

import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
            <div className='experience__data'>
              <div>
                <h3 className='experience__title'>Software Engineer</h3>

                <span className='experience__subtitle'>BYU-I - USA</span>

                <div className='experience__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>

              <div>
                <span className='experience__rounder'></span>

                <span className='experience__line'></span>
              </div>
            </div>

            <div className='experience__data'>
              <div></div>

              <div>
                <span className='experience__rounder'></span>

                <span className='experience__line'></span>
              </div>

              <div>
                <h3 className='experience__title'>Teaching Assistant</h3>

                <span className='experience__subtitle'>BYU-I</span>

                <div className='experience__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>
            </div>

            <div className='experience__data'>
              <div>
                <h3 className='experience__title'>Online Tutor</h3>

                <span className='experience__subtitle'>BYU-I</span>

                <div className='experience__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>

              <div>
                <span className='experience__rounder'></span>

                <span className='experience__line'></span>
              </div>
            </div>

            <div className='experience__data'>
              <div></div>

              <div>
                <span className='experience__rounder'></span>

                <span className='experience__line'></span>
              </div>

              <div>
                <h3 className='experience__title'>Family Search</h3>

                <span className='experience__subtitle'>BYU-I</span>

                <div className='experience__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'experience__content experience__content-active'
                : 'experience__content'
            }
          >
            <div className='experience__data'>
              <div>
                <h3 className='experience__title'>Software Engineer</h3>

                <span className='experience__subtitle'>BYU-I</span>

                <div className='experience__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>

              <div>
                <span className='experience__rounder'></span>

                <span className='experience__line'></span>
              </div>
            </div>

            <div className='experience__data'>
              <div></div>

              <div>
                <span className='experience__rounder'></span>

                <span className='experience__line'></span>
              </div>

              <div>
                <h3 className='experience__title'>Teaching Assistant</h3>

                <span className='experience__subtitle'>BYU-I</span>

                <div className='experience__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>
            </div>

            <div className='experience__data'>
              <div>
                <h3 className='experience__title'>Online Tutor</h3>

                <span className='experience__subtitle'>BYU-I</span>

                <div className='experience__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>

              <div>
                <span className='experience__rounder'></span>

                <span className='experience__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
