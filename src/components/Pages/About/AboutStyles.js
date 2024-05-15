import styled from 'styled-components';

export const StyledTitle = styled.div`
  font-family:
    Phi,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  font-size: 34px;
  margin: px 0px 5px 0px;
  // color: black;
  font-weight: 100;
  text-align: right;
  letter-spacing: 14px;
  cursor: default;
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
  }
  @media screen and (max-width: 1200px) {
    font-size: 26px;
    letter-spacing: 10px;
    margin: 0px 0px 6px 0px;
  }
`;

export const StyledText = styled.div`
  font-family:
    Phi,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.3px;
  margin-top: 10px;
  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

// .about-image {
//   width: auto;
//   height: 750px;
//   opacity: 1;
//   z-index: 1;
//   &:hover {
//     transition: all 0.5s ease-in-out;
//     transform: scale(1.1);
//     cursor: pointer;
//   }
// }

// .carousel-container {
//   margin-top: 15px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
// .about-links {
//   display: flex;
//   align-items: stretch;
//   align-content: stretch;
//   flex-direction: row;
//   height: auto;
//   padding-bottom: 20px;
//   gap: 10px;
//   .link {
//     display: flex;
//     align-items: center;
//     align-content: center;
//     justify-content: center;
//     animation: fadeIn 1s 1.8s backwards;
//     &:hover {
//       transform: scale(1.2);
//       transition: all .2s ease-in-out;
//     }
//   }
// }

// @media screen and (max-width: 1200px) {
//   .about-title {
//     margin: 0;
//     padding: 0;
//   }
//   .about-image {
//     width: auto;
//     height: 60vh;
//     opacity: 1;
//     z-index: 1;
//     padding: none;
//     &:hover {
//       transition: all 0.5s ease-in-out;
//       transform: scale(1);
//       cursor: pointer;
//     }
//   }
//   .carousel-container {
//     margin-top: 35px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// }
