import React, { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            {' '}
            <SchoolIcon /> Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            {' '}
            <WorkIcon /> Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Software Engineer</h3>

                <span className='qualification__subtitle'>BYU-I - USA</span>

                <div className='qualification__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>

                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>

                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Teaching Assistant</h3>

                <span className='qualification__subtitle'>BYU-I</span>

                <div className='qualification__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Online Tutor</h3>

                <span className='qualification__subtitle'>BYU-I</span>

                <div className='qualification__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>

                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>

                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Family Search</h3>

                <span className='qualification__subtitle'>BYU-I</span>

                <div className='qualification__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Software Engineer</h3>

                <span className='qualification__subtitle'>BYU-I</span>

                <div className='qualification__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>

                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>

                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Teaching Assistant</h3>

                <span className='qualification__subtitle'>BYU-I</span>

                <div className='qualification__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Online Tutor</h3>

                <span className='qualification__subtitle'>BYU-I</span>

                <div className='qualification__calendar'>
                  <CalendarMonthIcon /> 2021 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>

                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
