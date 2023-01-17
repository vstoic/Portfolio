// import 'home.scss';
import { Link } from 'react-router-dom';
import './home.scss';
const Home = () => {

  return (
    <div className='container home-page'>
      <div className='text-area'>
        <h1>Hi, <br/> I'm</h1>
        <h1>Victor <br/> Software Engineer</h1>  
        <h2> Frontend Engineer / JavaScript Expert / FullStack Engineer </h2>
        <Link to='/contact' className='flat-button'>Contact Me</Link>
      </div>
    </div>
  )

};

export default Home;