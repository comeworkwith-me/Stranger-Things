import React from "react";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";


export const ConnectWalletButton = () => {
    const { status, connect, disconnect } = useWallet();


        if (status === WalletStatus.WALLET_NOT_CONNECTED) {
            return (
                <div className='connect-wallet-div'>
                    <button 
                        type = 'button'
                        key={`connect-EXTENSION`}
                        onClick={() => connect("EXTENSION")}
                        className='cta-button connect-wallet-button'
                        >
                            START
                    </button>
                </div>
            );
        }

        else if (status === WalletStatus.WALLET_CONNECTED) {
            return (
                <button
                    type= 'button'
                    onClick={() => disconnect()}
                    className='cta-button connect-wallet-button'
                >
                    END GAME
                </button>
            )

        }
    

};