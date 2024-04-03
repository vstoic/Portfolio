import './animatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span className="word">
      {strArray.map((letter, i) => (
        <span key={letter + i} className={`${letterClass} _${i + idx}`}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
