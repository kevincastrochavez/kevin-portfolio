import React, { useState } from 'react';

import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MonitorIcon from '@mui/icons-material/Monitor';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I Offer</span>

      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <MonitorIcon className='services__icon' />

            <h3 className='services__title'>
              Web <br /> Designer
            </h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(1)}>
            View More <EastIcon />
          </span>

          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <CloseIcon
                className='services__modal-close'
                onClick={() => toggleTab(0)}
              />

              <h3 className='services__modal-title'>Web Designer</h3>

              <p className='services__modal-description'>
                Service with more...
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <ToggleOnIcon className='services__icon' />

            <h3 className='services__title'>
              UX/UI <br /> Designer
            </h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(2)}>
            View More <EastIcon />
          </span>

          <div
            className={
              toggleState === 2
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <CloseIcon
                className='services__modal-close'
                onClick={() => toggleTab(0)}
              />

              <h3 className='services__modal-title'>UX/UI Designer</h3>

              <p className='services__modal-description'>
                Service with more...
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <DesignServicesIcon className='services__icon' />

            <h3 className='services__title'>
              Visual <br /> Designer
            </h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(3)}>
            View More <EastIcon />
          </span>

          <div
            className={
              toggleState === 3
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <CloseIcon
                className='services__modal-close'
                onClick={() => toggleTab(0)}
              />

              <h3 className='services__modal-title'>Visual Designer</h3>

              <p className='services__modal-description'>
                Service with more...
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>

                <li className='services__modal-service'>
                  <CheckCircleOutlineIcon />

                  <p className='services__modal-info'>User Interface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {toggleState !== 0 && (
        <div className='services__overlay' onClick={() => toggleTab(0)}></div>
      )}
    </section>
  );
}

export default Services;
