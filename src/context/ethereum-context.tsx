import React, { createContext, useState, useContext, ReactNode } from 'react';
import { disconnectWallet } from '../utils/connect-wallet';

interface EthereumContextProps {
  address: string | null;
  setAddress: (address: string | null) => void;
  disconnect: (walletType: string) => void;
}

const EthereumContext = createContext<EthereumContextProps | undefined>(undefined);

export const EthereumProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);

  const disconnect = async (walletType: string) => {
    await disconnectWallet(walletType);
    setAddress(null);
    console.log(`${walletType} disconnected`);
  };

  return (
    <EthereumContext.Provider value={{ address, setAddress, disconnect }}>
      {children}
    </EthereumContext.Provider>
  );
};

export const useEthereum = () => {
  const context = useContext(EthereumContext);
  if (!context) {
    throw new Error('useEthereum must be used within an EthereumProvider');
  }
  return context;
};
