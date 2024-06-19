import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import "./contact.scss";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pa2p7d8', 'template_r01b0px', form.current, 'wUX23VKw4uha9zlhj')
      .then(
        () => {
          setMessageStatus('SUCCESS');
          console.log('SUCCESS!');
        },
        (error) => {
          setMessageStatus('FAILED');
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  const closeNotification = () => {
    setMessageStatus('');
  };

  return (
    <main className='section'>
      <section className="contact">
        <h2 className="section__title Mg-top">
          Get In <span>Touch</span>
        </h2>
        
        <div className="contact__container grid">
          <div className="contact__data">
            <h3 className="contact__title">Interested? Let's Get Into It!</h3>
            <p className="contact__description">Feel free to get in touch with me</p>

            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className='info__icon' />
                <div>
                  <span className="info__title">Mail Me</span>
                  <h4 className="info__desc">renzavitug@gmail.com</h4>
                </div>
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className='info__icon' />
                <div>
                  <span className="info__title">Call Me</span>
                  <h4 className="info__desc">(+63) 967-396-6440</h4>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://facebook.com" className="contact__social-link">
                <FaFacebookF />
              </a>

              <a href="https://linkedin.com" className="contact__social-link">
                <FaLinkedin />
              </a>
              <a href="https://google.com" className="contact__social-link">
                <FaGoogle />
              </a>
            </div>
          </div>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="form__input-group">

              <div className="form__input-div">
                <input type="text" name='user_name' required placeholder='Your Name' className="form__control" />
              </div>

              <div className="form__input-div">
                <input type="email" name='user_email' required placeholder='Your Email' className="form__control" />
              </div>

              <div className="form__input-div">
                <input type="text" name='user_subject' required placeholder='Subject' className="form__control" />
              </div>

            </div>
            <div className="form__input-div">
              <textarea name='message' required placeholder='Your Message' className="form__control textarea"></textarea>
            </div>
            <button type='submit' className="button">
              Send Message <span className="button__icon contact__button-icon"><FiSend /></span>
            </button>
          </form>
        </div>

        {messageStatus && (
          <div className="overlayC">
            <div className={`notification ${messageStatus === 'SUCCESS' ? 'success' : 'error'}`}>
              <p>{messageStatus === 'SUCCESS' ? 'Email has been sent successfully!' : 'Failed to send email. Please try again later.'}</p>
              <button onClick={closeNotification}>Close</button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Contact;
