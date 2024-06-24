import React from 'react';
import Image from '../assets/scroll-to-sell.png';

interface ScrollToSellProps {
  isVisible?: boolean;
}

const ScrollToSell: React.FC<ScrollToSellProps> = ({ isVisible }) => {
	return (
		<div
			className={`animate-bounce flex items-center fixed bottom-0 left-0 mb-4 ml-4 transition-opacity duration-500 ease-in-out ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<img src={Image} alt='Dog Bone' className={``} />
			<span className='flex flex-col items-center justify-center ml-[10px]'>
				<p className='text-center font-single text-[20px] sm:text-[40px] text-WHITE  leading-[1]'>
					{'Scroll'.toUpperCase()}
				</p>
				<p className='text-center font-single text-[20px] sm:text-[40px] text-WHITE leading-[1]'>
					{'To Sell'.toUpperCase()}
				</p>
			</span>
		</div>
	);
};

export default ScrollToSell;
