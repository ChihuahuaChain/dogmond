import { useState } from 'react';

interface ButtonProps {
	onClick: () => void;
	children: React.ReactNode;
	disabled?: boolean;
	classname?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, classname }) => {
	const [isHover, setIsHover] = useState(false);

	const styleButtonNormal = {
		fontFamily: 'Single Day',
		fontSize: '20px',
		fontWeight: 400,
		lineHeight: '24px',
		letterSpacing: '-0.2px',
		color: '#2252D6',
		width: '153px',
		height: '48px',
		padding: '8px 20px 8px 20px',
		borderRadius: '40px 40px 40px 40px',
		border: '1px',
		backgroundColor: 'white',
		boxShadow:
			'8px 8px 16px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(255, 255, 255, 0.12) inset, 0px -2px 4px 0px rgba(0, 0, 0, 0.12) inset'
	};

	const styleButtonHover = {
		fontFamily: 'Single Day',
		fontSize: '20px',
		fontWeight: 400,
		lineHeight: '24px',
		letterSpacing: '-0.2px',
		color: '#2252D6',
		width: '153px',
		height: '48px',
		padding: '8px 20px 8px 20px',
		borderRadius: '40px 40px 40px 40px',
		border: '1px',
		backgroundColor: 'white',
		boxShadow:
			'0px 0px 0px 3px rgba(255, 255, 255, 0.12), 8px 8px 16px 0px rgba(0, 0, 0, 0.12), 0px 0px 16px 0px rgba(255, 255, 255, 0.24), 0px 2px 4px 0px rgba(255, 255, 255, 0.12) inset, 0px -2px 4px 0px rgba(0, 0, 0, 0.12) inset'
	};

	const styleButtonDisabled = {
		color: '#00000060',
		fontFamily: 'Single Day',
		fontSize: '20px',
		fontStyle: 'normal',
		fontWeight: 400,
		lineHeight: '24px',
		letterSpacing: '-0.2px',
		width: '153px',
		height: '48px',
		padding: '8px 20px 8px 20px',
		borderRadius: '40px 40px 40px 40px',
		border: '1px',
		backgroundColor: 'white',
		boxShadow:
			'0px 0px 0px 3px rgba(255, 255, 255, 0.12), 8px 8px 16px 0px rgba(0, 0, 0, 0.12), 0px 0px 16px 0px rgba(255, 255, 255, 0.24), 0px 2px 4px 0px rgba(255, 255, 255, 0.12) inset, 0px -2px 4px 0px rgba(0, 0, 0, 0.12) inset'
	};
	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<button
			className={`active:scale-105 active:shadow-lg active:bg-gray-300 active:text-gray-800 active:border-gray-400 active:ring-gray-400 active:ring-2 z-[4] ${classname}`}
			disabled={disabled}
			style={disabled ? styleButtonDisabled : isHover ? styleButtonHover : styleButtonNormal}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</button>
	);
};

export default Button;
