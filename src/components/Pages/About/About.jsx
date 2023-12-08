import Sing_Cheng_Resume from '../../../assets/Sing_Cheng_Resume.pdf';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import SkillCard from './SkillsCards/SkillCard';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Typography, Box, Link } from '@mui/material';
import { StyledText, StyledTitle } from './AboutStyles';

import MyTimeline from '../../Timeline/Timeline';
import FloatingArrow from '../../Common/Arrow/Arrow';
import Footer from '../../Footer/Footer';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <Box className="container about-page">
        <Box className="text-zone">
          <StyledTitle
            // variant="h1"
            // className="about-title"
            // sx={{ fontSize: '32px', margin: '20px' }}
          >
            Swe 👨🏻‍💻 Shutterbug 📷 Film Enthusiast 🎞️ Weightlifter 🏋🏻‍♂️
            {/* <AnimatedLetters
              strArray={'Swe, Coffee Addict, Film Enthusiast, food conoisseur, shutterbug, weightlifter '.split('')}
              letterClass={letterClass}
              idx={15}
            />
            <AnimatedLetters
              strArray={'Carpe Diem'.split('')}
              letterClass={letterClass}
              idx={21}
            /> */}
          </StyledTitle>
          {/* <Typography className="text">
            Victor is an aspiring full stack software engineer with a diverse
            background in real estate. He made a career change and attended an
            app academy bootcamp to acquire the necessary skills and knowledge
            to excel in the field of software engineering. Victor's passion for
            technology, coupled with his strong work ethic, will enable him to
            make valuable contributions to any team.
          </Typography>
          <Typography className="text">
            In his free time, Victor enjoys staying active and exploring his
            interests in photography/design, trying new resturants, and
            discovering new music. He is also an adrenaline junkie who enjoys
            physical activities such as weightlifting, hiking,
            bouldering and basketball.
          </Typography>
          <Typography className="text">
            Victor is always open to new opportunities and collaborations in the
            field of software engineering and technology. He welcomes anyone to
            reach out to him for potential projects or to discuss how he can
            bring his skills and passion to your organization.
          </Typography> */}

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
            new personal weightlifting records and learning to play the piano
            (Claude Debussy's 'Clair De Lune'). My other hobbies include
            photography, film, hiking, bouldering, basketball and coworking at a
            cafe. If you're reading this and thinking, 'Hey, that sounds like
            me,' well, just say hi!
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
