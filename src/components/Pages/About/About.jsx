import './about.scss';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            Victor is an aspiring full stack software engineer with a diverse
            background in real estate sales. He made a career change and
            attended an app academy bootcamp to acquire the necessary skills and
            knowledge to excel in the field of software engineering. Victor's
            passion for technology, coupled with his strong work ethic, will
            enable him to make valuable contributions to any team.
          </p>
          <p>
            In his free time, Victor enjoys staying active and exploring his
            interests in photography/design, trying new resturants, and
            discovering new music. He is also an adrenaline junkie who enjoys
            physical activities such as olympic weightlifting, hiking,
            bouldering, basketball and pushing to prod on a friday night.
          </p>
          <p>
            Victor is always open to new opportunities and collaborations in the
            field of software engineering and technology. He welcomes anyone to
            reach out to him for potential projects or to discuss how he can
            bring his skills and passion to your organization.
          </p>
        </div>
        {/* <div className="stage-cube-count">
          <div className="cubespinner">
            <div className="face1"></div>
            <div className="face2"></div>
            <div className="face3"></div>
            <div className="face4"></div>
            <div className="face5"></div>
            <div className="face6"></div>
          </div>
        </div> */}
      <div className='profile-picture'>
        <img src="/AboutImage.png" alt="" className="about-image" />
        <img src="/AboutImage.png" alt="" className="about-image2" />
      </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
}

export default About;