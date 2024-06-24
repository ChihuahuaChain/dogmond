import { useState } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';
import ButtonDisconnect from './button-disconnect';

interface TextProps {
	children: React.ReactNode;
	onClick: () => void;
	isMenuOpen: () => void;
}

const Text: React.FC<TextProps> = ({ children, onClick, isMenuOpen }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<div
				onClick={() => {
					setIsOpen(!isOpen);
					isMenuOpen();
				}}
				className={`flex justify-between items-center cursor-pointer ${isOpen && 'mb-[20px]'} `}
			>
				<p
				className='text-WHITE text-[20px] font-single max-sm:text-[16px]'
					style={{
						textShadow: '0px 1.2px 2.4px rgba(0, 0, 0, 0.12), 0px 1.2px 3.6px rgba(0, 0, 0, 0.20)',
						marginRight: isOpen ? '6px' : '24px'
					}}
				>
					{children}
				</p>
				{isOpen ? <ArrowUp style={{ marginRight: '6px' }} /> : <ArrowDown style={{ marginRight: '6px' }} />}
			</div>
			{isOpen && <ButtonDisconnect onClick={onClick} />}
		</>
	);
};

export default Text;
