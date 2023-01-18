// import 'home.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import LogoHome from '../../Logo/LogoHome';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';
import Canvas from './Canvas/Canvas';
// import Canvas from '../../Canvas/Canvas';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ', 'V', 'i', 'c', 't', 'o', 'r'];
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={23}
            />
          </h1>
          <h2> Frontend Engineer / JavaScript Expert / FullStack Engineer </h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <LogoHome />
      </div>
        <Loader type="ball-clip-rotate-multiple" />
        {/* <Canvas /> */}
    </>
  );

};

export default Home;