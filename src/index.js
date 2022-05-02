import './index.css'
import App from './App'
import React from 'react'
import Play from './pages/Play'
import ReactDOM from 'react-dom'
import Guide from './pages/Guide'
import Leaderboard from './pages/Leaderboard'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider'


getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <React.StrictMode>
      <WalletProvider {...chainOptions}>
        <div className='App-header'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path='/play' element={<Play/>} />
              <Route path='/leaderboard' element={<Leaderboard/>} />
              <Route path='/guide' element={<Guide/>} />
            </Routes>
          </BrowserRouter>
        </div>    
      </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
