import './project.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import WorkCarousel from './WorkCarousel/WorkCarousel';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import { Alert } from '@mui/material';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    }, []);
  return (
    <>
      <div className="container project-page">
        <div className="project-content">
          <h1 className="about-title">
            <AnimatedLetters
              strArray={'Projects'.split('')}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <WorkCarousel />
          {/* <Alert icon={false} color="info">
            Drag to scroll
          </Alert> */}
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Project;
