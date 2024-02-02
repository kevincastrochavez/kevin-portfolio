import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import EastIcon from '@mui/icons-material/East';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';

function Contact() {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    if (
      nameRef.current.value === '' ||
      emailRef.current.value === '' ||
      messageRef.current.value === ''
    ) {
      setLoading(false);
      setShowWarning(true);
    } else {
      emailjs
        .sendForm(
          'service_p9ka8ki',
          'template_hiphu1s',
          form.current,
          'dLOh8cyvr5SZ1jboU'
        )
        .then(
          (result) => {
            setLoading(false);
            setShowSuccess(true);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in Touch</h2>
      <span className='section__subtitle'></span>;
      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Talk to Me</h3>

          <div className='contact__info'>
            <a
              href='mailto:kevincastrochavez4@gmail.com'
              target='_blank'
              className='contact__card'
              rel='noreferrer'
            >
              <EmailIcon />

              <h3 className='contact__card-title'>Email</h3>

              <span className='contact__card-data'>kevincastro@gmail.com</span>

              <p className='contact__button'>
                Write me <EastIcon />
              </p>
            </a>

            <a
              href='https://wa.me/12086174867?text=Hello!'
              target='_blank'
              className='contact__card'
              rel='noreferrer'
            >
              <WhatsAppIcon />

              <h3 className='contact__card-title'>WhatsApp</h3>

              <span className='contact__card-data'>+1 208-617-4867</span>

              <p className='contact__button'>
                Message me <EastIcon />
              </p>
            </a>

            <a href='tel:+12086174867' className='contact__card'>
              <CallIcon />

              <h3 className='contact__card-title'>Phone Number</h3>

              <span className='contact__card-data'>+1 208-617-4867</span>

              <p className='contact__button'>
                Call me <EastIcon />
              </p>
            </a>
          </div>
        </div>

        <div className='contact__content'>
          <h3 className='contact__title'>Write me your Project</h3>

          <form className='contact__form' ref={form} onSubmit={sendEmail}>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>

              <input
                type='text'
                name='user_name'
                className='contact__form-input'
                placeholder='Your Name'
                ref={nameRef}
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>Email</label>

              <input
                type='email'
                name='user_email'
                className='contact__form-input'
                placeholder='example@gmail.com'
                ref={emailRef}
              />
            </div>

            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Project</label>

              <textarea
                name='message'
                cols='30'
                rows='10'
                className='contact__form-input'
                placeholder='I have this wonderful idea I would love you to take a look at! ...'
                ref={messageRef}
              ></textarea>
            </div>

            <button className='data__contact button button--flex'>
              Send Message
              <svg
                className='button__icon'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z'
                  fill='#fff'
                ></path>
                <path
                  d='M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z'
                  fill='#fff'
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      {showWarning && (
        <Snackbar
          open={showWarning}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          onClose={() => setShowWarning(false)}
        >
          <Alert
            onClose={() => setShowWarning(false)}
            severity='warning'
            variant='filled'
            sx={{ width: '100%' }}
          >
            Please fill out all the fields and then try again
          </Alert>
        </Snackbar>
      )}
      {showSuccess && (
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          onClose={() => setShowSuccess(false)}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity='success'
            variant='filled'
            sx={{ width: '100%' }}
          >
            Thank you! I will contact you as soon as possible
          </Alert>
        </Snackbar>
      )}
      {loading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          onClick={() => setLoading(false)}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
    </section>
  );
}

export default Contact;
