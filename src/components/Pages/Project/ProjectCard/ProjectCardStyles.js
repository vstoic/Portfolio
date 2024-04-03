import styled from 'styled-components';
import { Box, Modal } from '@mui/material';
// import Modal from '@mui/material/Modal';

export const Title = styled.div`
  fontFamily: 'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'black',
`;

export const LinkText = styled.p`
    cursor: pointer;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 0px;
    color: black;
    text-decoration: none;
    fontFamily: 'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',

    :hover {
      color: #3f51b5;
    }
  `;

export const WorkImage = styled.img`
  width: 388px;
  height: 285px;
  object-fit: cover;
  border-radius: 3px;
  opacity: 0.8;
  transition: opacity 500ms ease;
  box-shadow:
    0px 2px 5px 1px rgba(0, 0, 0, 0.2),
    0px 3px 5px 0px rgba(0, 0, 0, 0.04);

  @media (max-width: 1200px) {
    height: auto%;
    width: 100%;
  }
`;

export const ProjectImage = styled.img`
  width: 388px;
  height: 285px;
  object-fit: cover;
  border-radius: 3px;
  opacity: 0.8;
  filter: grayscale(100%);
  transition: opacity 500ms ease;
  box-shadow:
    0px 2px 5px 1px rgba(0, 0, 0, 0.2),
    0px 3px 5px 0px rgba(0, 0, 0, 0.04);

  @media (max-width: 1200px) {
    height: auto%;
    width: 100%;
    filter: grayscale(0%);
  }
`;

export const CustomModal = styled(Modal)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  backdrop-filter: blur(5px);
  flex-wrap: wrap;
  border: none;
  overflow: scroll;

  @media (max-width: 900px) {
    width: 100vw;
    flex-direction: column;
  }
`;

export const ModalContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  width: 85%;
  height: 85%;
  min-height: 85%;
  overflow: scroll;

  @media (max-width: 900px) {
    overflow: scroll;
    overflow-y: auto; /* Allow vertical scrolling */
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;

export const ModalImageContainer = styled(Box)`
  width: 50%;
  height: auto;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0% 5%;

  @media (max-width: 900px) {
    width: 80vw;
    height: auto;
    margin: 20px 0px 0px 0px;
  }
`;

export const ModalTextContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
  width: 50%;
  // height: 100%;
  padding: 30px 50px;

  @media (max-width: 900px) {
    width: 80vw;
    height: 100%;
    padding: 20px 0px 30px 0px;
    // overflow: none;
  }
`;

export const styles = {
  eachGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3rem',
    cursor: 'pointer',
    width: '100%',
    margin: 0, // Add this to reset margin
    padding: 0, // Add this to reset padding
    animation: 'fadeIn 1s 0.5s backwards',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  textTitle: {
    margin: '4px 0px 0px',
    color: '#333',
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: '300',
    fontFamily:
      'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
  },
  textJobTitle: {
    margin: '15px 0px 0px',
    color: 'grey',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: '200',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  text: {
    color: 'black',
    fontSize: '16px',
    fontWeight: 'normal',
    fontFamily:
      'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
  },
  modalImage: {
    overflow: 'show',
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
  modelTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end', // Updated property
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  exitButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: ' 200',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  modalSubTitle: {
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: '24px',
    fontSize: '16px',
    fontWeight: '200',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  modalText: {
    color: '#333',
    paddingLeft: '15px',
    fontSize: '14px',
    fontWeight: '200',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  link: {
    paddingLeft: '15px',
    cursor: 'pointer',
    fontWeight: '200',
    textDecoration: 'none',
    color: '0000EE',
    fontSize: '14px',
    fontFamily:
      'Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
};
