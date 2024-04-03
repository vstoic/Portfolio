// import './contact.scss';
// import { useEffect, useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Footer from '../../Footer/Footer';

// const Contact = () => {
//   const refForm = useRef();
//     useEffect(() => {
//       console.log('Contact component rendered');
//     });
//     const sendEmail = (e) => {
//       e.preventDefault();
//       emailjs
//         .sendForm(
//           'service_n5dd71q',
//           'template_2aonywd',
//           refForm.current,
//           'TfTl1I5s2gpIaO56R'
//         )
//         .then(
//           () => {
//             alert('Message Sent, I will get back to you shortly');
//             window.location.reload(false);
//           },
//           () => {
//             alert('Message failed to send.');
//           }
//         );
//     };

//   return (
//     <>
//       <div className="container contact-page">
//         <div className="text-zone">
//           <h1>{Math.random()}</h1>
//           <h1 className="email-title">Email Me!</h1>
//           <div className="contact-form">
//             <form ref={refForm} onSubmit={sendEmail}>
//               <ul>
//                 <li className="half">
//                   <input type="text" name="name" placeholder="Name" required />
//                 </li>

//                 <li className="half">
//                   <input
//                     type="text"
//                     name="email"
//                     placeholder="Email"
//                     required
//                   />
//                 </li>
//                 <li>
//                   <input
//                     type="text"
//                     name="subject"
//                     placeholder="Subject"
//                     required
//                   />
//                 </li>
//                 <li>
//                   <textarea
//                     name="message"
//                     placeholder="Message"
//                     required
//                   ></textarea>
//                 </li>
//                 <li>
//                   <input type="submit" className="flat-button" value="Send" />
//                   <FontAwesomeIcon icon="fa-solid fa-check" />
//                 </li>
//               </ul>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       {/* <Loader type="ball-clip-rotate-multiple" /> */}
//     </>
//   );
// }

// export default Contact;
