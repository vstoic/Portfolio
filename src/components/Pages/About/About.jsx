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
            This is my bio,This is my bio,This is my bio,This is my bio,This is
            my bio, This is my bio, This is my bio, This is my bio, This is my
            bio, This is my bio, This is my bio, This is my bio, This is my bio,
            This is my bio, This is my bio,
          </p>
          <p>
            This is my bio, This is my bio, This is my bio, This is my bio,This
            is my bio, This is my bio, This is my bio, This is my bio, This is
            my bio, This is my bio.
          </p>
          <p>
            This is my bio, This is my bio, This is my bio, This is my bio,This
            is my bio, This is my bio, This is my bio, This is my bio, This is
            my bio, This is my bio.
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
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
}

export default About;