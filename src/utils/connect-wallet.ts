import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum: any;
    keplr: any;
    getOfflineSigner: any;
  }
}

export const connectToMetaMask = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  try {
    // Request MetaMask to connect
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Connect to user's address
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();

    return {
      provider,
      signer,
      address: accounts[0],
    };
  } catch (error) {
    console.error('Failed to connect to MetaMask', error);
    throw error;
  }
};

export const connectToKeplr = async () => {
  if (!window.keplr) {
    throw new Error('Keplr is not installed');
  }

  try {
    // Enable Keplr
    await window.keplr.enable("cosmoshub-4");

    // Get the offline signer
    const offlineSigner = window.getOfflineSigner("cosmoshub-4");

    // Get the key for the user
    const accounts = await offlineSigner.getAccounts();

    return {
      address: accounts[0].address,
    };
  } catch (error) {
    console.error('Failed to connect to Keplr', error);
    throw error;
  }
};

export const disconnectWallet = async (walletType: string) => {
  switch (walletType) {
    case 'MetaMask':
      // MetaMask does not have a disconnect function, we can reset the state
      console.log('Disconnected from MetaMask');
      break;
    case 'Keplr':
      // Keplr does not have a direct disconnect method
      console.log('Disconnected from Keplr');
      break;
    default:
      console.log('Unknown wallet type');
  }
};
