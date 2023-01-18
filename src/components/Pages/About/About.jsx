import './about.scss';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '.']}
            idx={15}
          />
        </h1>
        <p>
          This is my bio,This is my bio,This is my bio,This is my bio,This is my
          bio, This is my bio, This is my bio, This is my bio, This is my bio,
          This is my bio, This is my bio, This is my bio, This is my bio, This
          is my bio, This is my bio,
        </p>
        <p>
          This is my bio, This is my bio, This is my bio, This is my bio,This is
          my bio, This is my bio, This is my bio, This is my bio, This is my
          bio, This is my bio.
        </p>
        <p>
          This is my bio, This is my bio, This is my bio, This is my bio,This is
          my bio, This is my bio, This is my bio, This is my bio, This is my
          bio, This is my bio.
        </p>
      </div>
    </div>
  );
}

export default About;