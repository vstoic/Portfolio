// import 'home.scss';
import { useEffect, useState } from 'react';
import './home.scss';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import { workList } from '../../../assets/content/work';
import { projectsList } from '../../../assets/content/projects';
import ProjectCard from '../Project/ProjectCard/ProjectCard';
import Box from '@mui/material/Box';
// import MyTimeline from '../../Timeline/Timeline';
import FloatingArrow from '../../Common/Arrow/Arrow';
import Footer from '../../Footer/Footer';
// import Layout from '../../Layout/Layout';

// const styles = {
//   gridContainer: {
//     marginTop: '0',
//     display: 'grid', // Wrap 'grid' in quotes
//     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr)',
//     gridTemplateRows: 'auto',
//     gap: '1.5em',
//     // border: '1px solid red',
//   },
// };

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const firstName = ' Victor '.split('');
  const lastName = 'Cheng'.split('');
  // const jobArray1 = 'Software '.split('');
  // const jobArray2 = 'Engineer.'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 9000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className="title-container">
            <img src="/self.JPG" alt="logo" className="pfp" />
            <h1 className="home-title">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i, </span>
              <span className={`${letterClass} _12`}> </span>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m </span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={firstName}
                idx={15}
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={lastName}
                idx={23}
              />
              <br />
              {/* <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray1}
                idx={30}
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray2}
                idx={39}
              /> */}
              <h2 className='home-title2'> 
                Frontend Engineer / FullStack Engineer 
              </h2>
            </h1>
          </div>
          {/* <Link to="/contact" className="flat-button">
            Contact Me
          </Link> */}
          {/* <MyTimeline /> */}

          <FloatingArrow text={'Work Experience'} />
          <div className='home-grid-container'>
            {workList.map((work, index) => (
              // <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <ProjectCard project={work} />
              // </Grid>
            ))}
          </div>

          <FloatingArrow text={'Portfolio'} />
          <div className="home-grid-container">
            {projectsList.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
          
          <Footer/>
        </div>

      </div>
      {/* <Loader type="ball-clip-rotate-multiple" /> */}
      {/* <Canvas /> */}
    </>
  );
};

export default Home;
