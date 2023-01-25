import './project.scss';
import Loader from 'react-loaders';
import WorkCarousel from './WorkCarousel/WorkCarousel';
const Project = () => {
  return (
    <>
      <div className="container project-page">
        <WorkCarousel />
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Project;
