// components/Background.tsx
import React from 'react';
import {
	CoinOneLeftDesktop,
	CoinOneRightDesktop,
	CoinTwoLeftDesktop,
	CoinTwoRightDesktop,
	CoinThreeLeftDesktop,
	CoinThreeRightDesktop,
	PawnGifDesktop
} from './coins';

type BackgroundProps = {
	comingFrom: string;
};

const Background1: React.FC<BackgroundProps> = ({ comingFrom }) => {
	const visible: string = comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden';

	return (
		<div className='absolute w-full h-full -z-[1]'>
			<CoinOneLeftDesktop classname={`${visible} top-[10%] left-[12%]`} />
			<CoinTwoLeftDesktop classname={`${visible} top-[45%] left-[7%]`} />
			<CoinThreeLeftDesktop classname={`${visible} top-[79%] left-[12%]`} />
			<CoinOneRightDesktop classname={`${visible} top-[15%] right-[12%]`} />
			<CoinTwoRightDesktop classname={`${visible} top-[52%] right-[7%]`} />
			<CoinThreeRightDesktop classname={`${visible} top-[82%] right-[12%]`} />
			<PawnGifDesktop classname={`left-[50%] transform -translate-x-1/2`} />
		</div>
	);
};

export default Background1;
