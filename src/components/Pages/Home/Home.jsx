// import 'home.scss';
// import { useEffect, useState } from 'react';
import './home.scss';
// import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import { workList } from '../../../assets/content/work';
import { projectsList } from '../../../assets/content/projects';
import ProjectCard from '../Project/ProjectCard/ProjectCard';
// import MyTimeline from '../../Timeline/Timeline';
import FloatingArrow from '../../Common/Arrow/Arrow';
import Footer from '../../Footer/Footer';
// import Layout from '../../Layout/Layout';
const Home = () => {
  // const [letterClass, setLetterClass] = useState('text-animate');
  // const firstName = ' Victor '.split('');
  // const lastName = 'Cheng'.split('');
  // const jobArray1 = 'Software '.split('');
  // const jobArray2 = 'Engineer.'.split('');
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 9000);
  // }, []);
  console.log(
    'Hi Again, thanks for stopping by! Feel free to reach out to me. My contact info is at the bottom of the page. '
  );
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className="title-container">
            <img src="/self.jpg" alt='GITHUB ERROR' className="pfp" />
            <div className="title-text-container">
              {/* <span className={letterClass}>H</span>
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
              /> */}
              <h1 className='home-title'> 
                Hi, I'm Victor Cheng
              </h1>
              {/* <br /> */}
              <h2 className='home-title2'> 
                Frontend Engineer / FullStack Engineer 
              </h2>
            </div>
          </div>
          {/* <Link to="/contact" className="flat-button">
            Contact Me
          </Link> */}
          {/* <MyTimeline /> */}

          <FloatingArrow text={'Work Experience'} />
          <div className='home-grid-container'>
            {workList.map((work, index) => (
              // <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <ProjectCard project={work} key={index}/>
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
