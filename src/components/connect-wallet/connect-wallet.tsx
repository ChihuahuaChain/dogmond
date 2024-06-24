import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MetamaskLogo from '../../assets/metamask-icon.png';
import KeplrLogo from '../../assets/coinbase-icon.png';
import './connect-wallet.css';
import { connectToMetaMask, connectToKeplr } from '../../utils/connect-wallet';
import { useEthereum } from '../../context/ethereum-context';

interface WalletButtonProps {
	imgSrc: string;
	altText: string;
	walletName: string;
	onClick: () => void;
}

interface IConnectWallet {
	isModalOpen: boolean;
	setModalOpen: (isOpen: boolean) => void;
}

const WalletButton: React.FC<WalletButtonProps> = ({ imgSrc, altText, walletName, onClick }) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<button className='WalletButton' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onClick}>
			<img src={imgSrc} alt={altText} className='w-6 h-6 mr-3' />
			<p className={`text-[#3D3D3D] ${isHover ? 'text-[#4778FF]' : ''} font-single mr-2 text-[18px]`}>{walletName}</p>
			<span className='text-[#C2C2C2] ml-auto text-gray-500 font-single text-[16px]'>(Detected)</span>
		</button>
	);
};

const ConnectWallet: React.FC<IConnectWallet> = ({ isModalOpen, setModalOpen }) => {
	const [open, setOpen] = useState(false);
	const { setAddress, disconnect } = useEthereum();

	useEffect(() => {
		if (isModalOpen) {
			setOpen(true);
			setModalOpen(true);
		}
	}, [isModalOpen]);

	const onCloseModal = () => {
		setOpen(false);
		setModalOpen(false);
	};

	const handleConnectMetaMask = async () => {
		try {
			const { address } = await connectToMetaMask();
			console.log('Connected to MetaMask:', address);
			setAddress(address);
			onCloseModal();
		} catch (error) {
			console.error('Error connecting to MetaMask:', error);
		}
	};

	const handleConnectKeplr = async () => {
		try {
			const { address } = await connectToKeplr();
			console.log('Connected to Keplr:', address);
			setAddress(address);
			onCloseModal();
		} catch (error) {
			console.error('Error connecting to Keplr:', error);
		}
	};

	const handleDisconnectKeplr = async () => {
		try {
			await disconnect('Keplr');
			setAddress(null);
			console.log('Disconnected from Keplr');
		} catch (error) {
			console.error('Error disconnecting from Keplr:', error);
		}
	};

	return (
		<Modal
			open={open}
			onClose={onCloseModal}
			center
			classNames={{
				overlay: 'customOverlay',
				modal: 'customModal'
			}}
		>
			<div className='Title'>
				<h2 className='text-[24px] font-single mb-4 text-center text-[#3D3D3D]'>Connect Wallet</h2>
			</div>
			<div className='space-y-3 WalletButtons'>
				<WalletButton imgSrc={MetamaskLogo} altText='Metamask' walletName='Metamask' onClick={handleConnectMetaMask} />
				<WalletButton imgSrc={KeplrLogo} altText='Keplr' walletName='Keplr' onClick={handleConnectKeplr} />
			</div>
			<div className='NoWallet flex justify-center'>
				<button className='text-[#A3A3A3] text-[16px] mt-4 text-gray-500 hover:underline font-single text-center'>
					I don't have wallet
				</button>
				<button
					onClick={handleDisconnectKeplr}
					className='text-[#A3A3A3] text-[16px] mt-4 text-gray-500 hover:underline font-single text-center'
				>
					Disconnect Keplr
				</button>
			</div>
		</Modal>
	);
};

export default ConnectWallet;
