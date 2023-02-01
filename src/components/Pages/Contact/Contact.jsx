import './contact.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },3000)
  }, [])

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          'service_n5dd71q',
          'template_2aonywd',
          refForm.current,
          'TfTl1I5s2gpIaO56R'
        )
        .then(
          () => {
            alert('Message Sent, I will get back to you shortly');
            window.location.reload(false);
          },
          () => {
            alert('Message failed to send.');
          }
        );
    };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={'Contact Me'.split('')}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            Victor is always open to new opportunities and collaborations in the
            field of software engineering and technology. He welcomes anyone to
            reach out to him for potential projects or to discuss how he can
            bring his skills and passion to your organization.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="Send"
                  />
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
}

export default Contact;