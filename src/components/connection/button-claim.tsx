import React from 'react';
import useHover from '../../hooks/useHover';

interface ButtonProps {
	onClick: () => void;
	children: React.ReactNode;
	disabled?: boolean;
}

const ButtonClaim: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
	const { isHovered, bind } = useHover();

	const buttonClasses = `font-['Single_Day'] text-[20px] font-normal leading-[24px] tracking-[-0.2px] w-[120px] h-[48px] p-[8px_20px] rounded-[40px] border bg-[#FFFFFF10] text-[#FFFFFF50] shadow-[inset_80px_-2.4px_4.8px_0_rgba(0,0,0,0.12),_8px_8px_16px_0_rgba(0,0,0,0.12)] ${
		isHovered ? 'hover-specific-styles' : ''
	} ${
		disabled
			? 'disabled:bg-white disabled:text-[#00000060] disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-50'
			: 'hover:shadow-[0px_0px_0px_3px_rgba(255,255,255,0.12),_8px_8px_16px_0_rgba(0,0,0,0.12),_0px_0px_16px_0_rgba(255,255,255,0.24),_inset_0px_2px_4px_0_rgba(255,255,255,0.12),_inset_0px_-2px_4px_0_rgba(0,0,0,0.12)]'
	} active:scale-105 active:shadow-lg active:bg-gray-300 active:text-gray-800 active:border-gray-400 active:ring-gray-400 active:ring-2`;

	return (
		<button {...bind} onClick={onClick} disabled={disabled} className={buttonClasses}>
			{children}
		</button>
	);
};

export default ButtonClaim;
