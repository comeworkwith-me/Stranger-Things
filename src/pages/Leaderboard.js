import { Link } from 'react-router-dom';
import * as query from '../contract/Query';
import { useState, useEffect } from 'react';
import { BackButton } from '../components/BackButton/BackButton';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import WalletAddress from '../components/WalletAddress/WalletAddress';

const Leaderboard = () => {
    const connectedWallet = useConnectedWallet();
    const [scores, setScores] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchScores = async () => {
          if (connectedWallet && connectedWallet.network.name === 'testnet') {      
            return (await query.getScores(connectedWallet)).scores;
          }
        };
    
        fetchScores().then(scores => {
          setScores(scores);
          setLoading(false);
        });
      }, [connectedWallet]);

      const renderScores = (scores) => {
        if (!scores || scores.length < 1) {
          return <div> No scores available :( </div>;
        }
    
        return scores.map((score, index) => {
          return (
            <div key={index} className="score">
              {/* Format is address: score */}
              {/* Slice address to first 5 and last 4 digits so it looks like terra...a1b2*/}
              <span>
                {score[0].slice(0, 5) + '...' + score[0].slice(-4)}:{' '}
                {score[1].toString().padStart(2, '0')}
              </span>
            </div>
          );
        });
      };

      return (
        <main className="App">
          <header>
            <Link to="/" className="home-link">
              <div className="header-titles">
                <img
                src="../STL.PNG"
                alt="Stranger Things Logo"
                height={100}
                />
              </div>
            </Link>
          </header>
    
          <div className="score-board-container">
            <h3>SCOREBOARD</h3>
            {loading ? (
              <div>Loading...</div>
            ) : (
              renderScores(scores)
            )}
            
            <div>
                <WalletAddress />
            </div>
            {BackButton()}
          </div>
        </main>
      );
 
};

export default Leaderboard; 