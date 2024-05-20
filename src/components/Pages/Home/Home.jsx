import './home.scss';
// import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import { workList } from '../../../assets/content/work';
import { skillsList } from '../../../assets/content/skills';
import { projectsList } from '../../../assets/content/projects';
import ProjectCard from '../../Common/Card/ProjectCard/ProjectCard';
import FloatingArrow from '../../Common/Arrow/Arrow';
import Footer from '../../Footer/Footer';
import SkillChips from '../../Common/Chips';
import { useCustomTheme } from '../../../assets/MaterialThemes';
import { StyledTitle1, StyledTitle2 } from './homeStyles';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const theme = useCustomTheme();

  console.log(
    'Hi Again, thanks for stopping by! Feel free to reach out to me. My contact info is at the bottom of the page. '
  );
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <a href="#/about" className="about-path">
            <div className="title-container">
              <img src="/self.jpg" alt="victor cheng" className="pfp" />
              <div className="title-text-container">
                <StyledTitle1 component={RouterLink} to="/about" theme={theme}>
                  Hi, I'm Victor Cheng
                </StyledTitle1>
                <StyledTitle2 component={RouterLink} to="/about" theme={theme}>
                  Frontend Engineer / FullStack Engineer
                </StyledTitle2>
              </div>
            </div>
          </a>
          <FloatingArrow text={'Skills & Tools'} />
          <SkillChips skills={skillsList} />
          <FloatingArrow text={'Work Experience'} />
          <div className="home-grid-container">
            {workList.map((work, index) => (
              <ProjectCard project={work} key={index} />
            ))}
          </div>
          <FloatingArrow text={'Portfolio'} />
          <div className="home-grid-container">
            {projectsList.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
