import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './SkillCard.scss';
import {
  js,
  react,
  html,
  css,
  sass,
  aws,
  gmaps,
  git,
  jquery,
  node,
  express,
  mongodb,
  heroku,
  npm,
  postgres,
  rails,
  redux,
  ruby,
  sql,
  tailwind,
  webpack,
} from './index.jsx';

export default function SkillCard() {
  return (
    <>
      <div className="about-grid-container">
        <img src={react} alt="" className="icon-img" />
        <img src={js} alt="" className="icon-img" />
        <img src={html} alt="" className="icon-img" />
        <img src={css} alt="" className="icon-img" />
        <img src={sass} alt="" className="icon-img" />
        <img src={aws} alt="" className="icon-img" />
        <img src={gmaps} alt="" className="icon-img" />
        <img src={git} alt="" className="icon-img" />
        <img src={jquery} alt="" className="icon-img" />
        <img src={node} alt="" className="icon-img" />
        <img src={express} alt="" className="icon-img" />
        <img src={mongodb} alt="" className="icon-img" />
        <img src={heroku} alt="" className="icon-img" />
        <img src={npm} alt="" className="icon-img" />
        <img src={postgres} alt="" className="icon-img" />
        <img src={rails} alt="" className="icon-img" />
        <img src={redux} alt="" className="icon-img" />
        <img src={ruby} alt="" className="icon-img" />
        <img src={sql} alt="" className="icon-img" />
        <img src={tailwind} alt="" className="icon-img" />
        <img src={webpack} alt="" className="icon-img" />
      </div>
    </>
  );
}
