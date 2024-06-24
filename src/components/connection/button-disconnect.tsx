import { useState } from 'react';
import { ReactComponent as LogOut } from '../../assets/logout.svg';

interface ButtonProps {
	onClick: () => void;
}

const styleButtonNormal = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Single Day',
	fontSize: '20px',
	fontWeight: 400,
	lineHeight: '24px',
	letterSpacing: '-0.2px',
	color: 'white',
	width: '153px',
	height: '48px',
	padding: '16px 12px',
	borderRadius: '10px',
	border: '1px solid rgba(255, 255, 255, 0.08)',
	backgroundColor: 'rgba(255, 255, 255, 0.20)',
	boxShadow:
		'0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 4px 16px 0px rgba(0, 0, 0, 0.16)'
};

const styleButtonHover = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Single Day',
	fontSize: '20px',
	fontWeight: 400,
	lineHeight: '24px',
	letterSpacing: '-0.2px',
	color: 'white',
	width: '153px',
	height: '48px',
	padding: '16px 12px',
	borderRadius: '10px',
	border: '1px solid rgba(255, 255, 255, 0.16)',
	backgroundColor: 'rgba(255, 255, 255, 0.32)',
	boxShadow:
		'0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 4px 16px 0px rgba(255, 255, 255, 0.08)'
};

const ButtonDisconnect: React.FC<ButtonProps> = ({ onClick }) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<button
			className='active:scale-105 active:shadow-lg active:bg-gray-300 active:text-gray-800 active:border-gray-400 active:ring-gray-400 active:ring-2'
			style={isHover ? styleButtonHover : styleButtonNormal}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* <img src='../assets/logout.svg' alt='logout' /> */}
			<LogOut style={{ marginRight: '6px' }} />
			Disconnect
		</button>
	);
};

export default ButtonDisconnect;
