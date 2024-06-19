// import Sing_Cheng_Resume from '../../../assets/Sing_Cheng_Resume.pdf';
// import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
// import SkillCard from './SkillsCards/SkillCard';
// import { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
import { StyledText, StyledTitle } from './AboutStyles';

import MyTimeline from '../../Timeline/Timeline';
import FloatingArrow from '../../Common/Arrow/Arrow';
import Footer from '../../Footer/Footer';

const About = () => {
  // const [letterClass, setLetterClass] = useState('text-animate');
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 3000);
  // }, []);
  return (
    <>
      <Box className="container about-page">
        <Box className="text-zone">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'flex-end',
              width: '100%',
              margin: '25px 0',
            }}
          >
            <StyledTitle>Swe👨🏻‍💻</StyledTitle>
            <StyledTitle>Shutterbug📷</StyledTitle>
            <StyledTitle>Film Enthusiast🎞️</StyledTitle>
            <StyledTitle>Weightlifter🏋🏻‍♂️</StyledTitle>
          </Box>
          <StyledText>
            I thrive on challenges and constantly seek new adventures, finding
            an unrivaled thrill in building something from the ground up and
            witnessing it come alive. Transitioning from five years in real
            estate—following in my family's footsteps—I realized the stress from
            sales wasn't worthwhile. I yearned for a new career, an escape.
            Despite the uncertain economy, my instincts pulled me toward
            software engineering, and you know what? I jumped right in. Was it
            daunting? Absolutely, but that's the beauty of the journey!
          </StyledText>
          <StyledText>
            Beyond improving my coding abilities, I'm also working on setting
            new personal weightlifting records 🏋🏻‍♂️, and learning to play the
            piano 🎹 (Claude Debussy's 'Clair De Lune'). My other hobbies
            include photography 📷, film 🎞️, hk mahjong 🀄, cycling 🚴🏻‍♂️,
            basketball 🏀, hiking 🥾, bouldering 🧗🏼‍♂️, board games 🎲, and
            coworking at a cafe ☕. If you're reading this and thinking, 'Hey,
            that sounds like me,' well, just say hi!
          </StyledText>
          <FloatingArrow text={'My Timeline'} />
          <MyTimeline />
          {/* <Box className="carousel-container">
            <Box className="about-links">
              <Link
                href={Sing_Cheng_Resume}
                download="Sing_Cheng_Resume"
                className="flat-button"
              >
                Resume
              </Link>
            </Box>
            <FloatingArrow text={'My Toolkit'} />
          </Box>
            <SkillCard /> */}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
