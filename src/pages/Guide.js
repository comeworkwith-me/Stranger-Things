import { Link } from 'react-router-dom';
import { BackButton } from '../components/BackButton/BackButton';

const Guide = () => {
  return (
    <main className="App">
      <header>
        <Link to="/" className="home-link">
          <div className="header-titles">

            <img
              src="./STL2.PNG"
              alt="Stranger Things Logo"
              height={100}
            />
          </div>
        </Link>
      </header>

      <div className="score-board-container">
        <h3>HOW TO PLAY</h3>
        
        <div>
          <span className="help">
            Lucas, Mike, and Dustin are being attacked<br></br>
            by the Demogorgon at Hawkins Middle School!<br></br>
            Eleven is here to defeat his a$$. Attack the <br></br>
            Demogorgon as many times as you can within <br></br>
            15 seconds!
          </span>
        </div>
        {BackButton()}
      </div>
     <div>
     </div>
    </main>
  );
};

export default Guide;