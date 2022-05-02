import './App.css';
import React from 'react';
import { GameMenu } from './components/GameMenu/GameMenu';
import WalletAddress from './components/WalletAddress/WalletAddress';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { ConnectWalletButton } from './components/ConnectWalletButton/ConnectWalletButton';

function App() {
  const { status, availableConnectTypes } = useWallet();

  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);


  return (
    <main className="App">
      <header>
        <div className="header-titles">
        <img
            src="STL.PNG"
            alt="Stranger Things Logo"
            height={400}
          />
        </div>

      </header>
      
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          
        </div>
      )}

      {status === WalletStatus.WALLET_CONNECTED && (
        <div className='game-menu-container'>
          <GameMenu />
          <WalletAddress />
        </div>
      )}

      {ConnectWalletButton()}
    </main>
  );
}

export default App;
