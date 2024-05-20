import React from 'react';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './workCarousel.scss';
import { EffectCoverflow, Pagination } from 'swiper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function WorkCarousel() {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        border="none"
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/felp-thumbnail.gif"
            alt="loading..."
            onClick={handleOpen1}
          />
          <div className="carousel-text">
            <h1>Felp</h1>
            <div className="carousel-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://felpp.herokuapp.com/#/"
              >
                <LinkIcon sx={{ fontSize: 28, color: '#4d4d4e9f' }} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/vstoic/Felp"
              >
                <GitHubIcon sx={{ fontSize: 22, color: '#4d4d4e9f' }} />
              </a>
            </div>
            <p>A fullstack, single-page web application inspired by Yelp</p>
          </div>
        </SwiperSlide>
        {/* <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Felp
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              A fullstack, single-page web application inspired by Yelp.
            </Typography>
          </Box>
        </Modal> */}
        <SwiperSlide>
          <img
            src="/timerfighter-thumbnail.gif"
            alt="loading..."
            onClick={handleOpen2}
          />
          <div className="carousel-text">
            <h1>Timer Fighter</h1>
            <div className="carousel-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vstoic.github.io/TimerFighter/"
              >
                <LinkIcon sx={{ fontSize: 28, color: '#4d4d4e9f' }} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/vstoic/TimerFighter"
              >
                <GitHubIcon sx={{ fontSize: 22, color: '#4d4d4e9f' }} />
              </a>
            </div>
            <p>
              A 2D platform game challenging players to defeat as many enemies
              as possible within a set time limit.
            </p>
          </div>
        </SwiperSlide>
        {/* <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Timer Fighter
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              A 2D platform game built with vanilla JavaScript, challenging
              players to defeat as many enemies as possible within a set time
              limit.
            </Typography>
          </Box>
        </Modal> */}
        <SwiperSlide>
          <img
            src="/crawl-thumbnail.gif"
            alt="loading..."
            onClick={handleOpen3}
          />
          <div className="carousel-text">
            <h1>Crawl</h1>
            <div className="carousel-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://socialcrawl.herokuapp.com/#/"
              >
                <LinkIcon sx={{ fontSize: 28, color: '#4d4d4e9f' }} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/vstoic/crawl"
              >
                <GitHubIcon sx={{ fontSize: 22, color: '#4d4d4e9f' }} />
              </a>
            </div>
            <p>
              A full-stack website, users create venues and crawls (groups of
              venues) with a voting system inspired by Reddit's upvote system
            </p>
          </div>
        </SwiperSlide>
        {/* <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Crawl
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              A full-stack website, users create venues and crawls (groups of
              venues) with a voting system inspired by Reddit's upvote system.
            </Typography>
          </Box>
        </Modal> */}
      </Swiper>
    </>
  );
}
