import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; // Import Grid component
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {
  styles,
  ProjectImage,
  WorkImage,
  CustomModal,
  ModalContainer,
  ModalImageContainer,
  ModalTextContainer,
} from './ProjectCardStyles';


export default function ProjectCard(props) {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //could be removed. but too much work at the moment 

  const handleMouseEnter = (e) => {
    e.target.style.opacity = '1';
    e.target.style.filter = 'grayscale(18%)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.opacity = '.8';
    e.target.style.filter = 'grayscale(100%)';
  };

  const handleMouseEnterWork = (e) => {
    // e.target.style.opacity = '1';
    e.target.style.transition = 'all 0.1s ease-in-out';
    e.target.style.transform = 'scale(1.02)';
  };
  const handleMouseLeaveWork = (e) => {
    e.target.style.transform = 'scale(1)';
    // e.target.style.opacity = '.8';
    // e.target.style.filter = 'none';
  };

  return (
    <>
      {props.project.type === 'work' && (
        <Grid style={styles.eachGrid} onClick={() => handleOpen(props.project)}>
          <WorkImage
            src={props.project.imageSrc}
            alt="none"
            onMouseEnter={handleMouseEnterWork}
            onMouseLeave={handleMouseLeaveWork}
          />
          <Box className="project-text" style={styles.textContainer}>
            <Typography style={styles.textJobTitle}>
              {props.project.jobTitle}
            </Typography>
            <Typography style={styles.textTitle}>
              {props.project.name}
            </Typography>
          </Box>
        </Grid>
      )}

      {props.project.type === 'project' && (
        <Grid style={styles.eachGrid} onClick={() => handleOpen(props.project)}>
          <ProjectImage
            src={props.project.imageSrc}
            alt="none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Box className="project-text" style={styles.textContainer}>
            <Typography style={styles.textJobTitle}>
              {props.project.description}
            </Typography>
            <Typography style={styles.textTitle}>
              {props.project.name}
            </Typography>
          </Box>
        </Grid>
      )}

      <CustomModal open={open} onClose={handleClose}>
        <ModalContainer>
          <ModalImageContainer>
            <img
              src={selectedProject?.imageSrc}
              style={styles.modalImage}
              alt="none"
            />
          </ModalImageContainer>

          {/* project type*/}
          {selectedProject?.type === 'project' && (
            <ModalTextContainer>
              <Box style={styles.exitButtonContainer}>
                <IconButton style={styles.exitButton} onClick={handleClose}>
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>
              <Typography style={styles.modalTitle}>
                {selectedProject?.name}
              </Typography>
              <Typography style={styles.modalText}>
                {selectedProject?.fullDescription}
              </Typography>
              <Typography style={styles.modalSubTitle}>Tech Stack: </Typography>
              <Typography style={styles.modalText}>
                {selectedProject?.technology}
              </Typography>
              <Typography style={styles.modalSubTitle}>Live Link:</Typography>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={selectedProject?.liveLink}
                style={styles.link}
              >
                {selectedProject?.liveLink}
              </Link>
              <Typography style={styles.modalSubTitle}>Github Link:</Typography>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={selectedProject?.githubLink}
                style={styles.link}
              >
                {selectedProject?.githubLink}
              </Link>
            </ModalTextContainer>
          )}

          {/* work type */}
          {selectedProject?.type === 'work' && (
            <ModalTextContainer>
              <Box style={styles.exitButtonContainer}>
                <IconButton style={styles.exitButton} onClick={handleClose}>
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>
              <Typography style={styles.modalTitle}>
                {selectedProject?.name}
              </Typography>
              <Typography style={styles.modalText}>
                {selectedProject?.description}
              </Typography>
              <Typography style={styles.modalSubTitle}>Outcome: </Typography>
              <Typography style={styles.modalText}>
                {selectedProject?.outcome}
              </Typography>
              <Typography style={styles.modalSubTitle}>
                Skills & Skills:{' '}
              </Typography>
              <Typography style={styles.modalText}>
                {selectedProject?.skills}
              </Typography>
              <Typography style={styles.modalSubTitle}>Timeline: </Typography>
              <Typography style={styles.modalText}>
                {selectedProject?.time}
              </Typography>
            </ModalTextContainer>
          )}
        </ModalContainer>
      </CustomModal>
    </>
  );
}
