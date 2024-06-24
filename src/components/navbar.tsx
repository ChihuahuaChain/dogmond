import React, { useEffect, useState } from 'react';
import Button from './connection/button';
import Logo from '../assets/logo.png';
import Text from './connection/text';
import { useEthereum } from '../context/ethereum-context';

interface INavbar {
  onOpenModal: () => void;
}

const Navbar: React.FC<INavbar> = ({ onOpenModal }) => {
  const { address, disconnect } = useEthereum();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log('Address changed:', address);
  }, [address]);

  const handleDisconnect = () => {
    // Assuming you have logic to determine the wallet type
    const walletType = address?.startsWith('0x') ? 'MetaMask' : 'Keplr';
    disconnect(walletType);
  };

  return (
    <nav className='flex items-center justify-between p-4 max-w-[1140px] w-[100%] pt-[52px]'>
      <div className='flex items-center'>
        <img src={Logo} alt='Logo' className={`h-[48px] w-[48px]`} />
      </div>
      <div>
        {address ? (
          <Text onClick={handleDisconnect} isMenuOpen={() => setIsMenuOpen(!isMenuOpen)}>
            {address.slice(0, 6)}...{address.slice(-4)}
          </Text>
        ) : (
          <Button onClick={onOpenModal}>Connect</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
