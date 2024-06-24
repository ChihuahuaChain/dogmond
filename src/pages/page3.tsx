// App.tsx
import React from 'react';
import {
	CoinOneRight,
	CoinOneLeft,
	CoinThreeLeft,
	CoinTwoLeft,
	CoinTwoRight,
	PawnGifNormal,
	CoinFourLeft
} from '../components/backgrounds/coins';

const Page3: React.FC = () => {
	return (
		<div className='relative xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%] flex flex-col items-center !min-h-[100vh]'>
			<div className='absolute w-full h-full -z-[1]'>
				<CoinOneRight classname={`top-[0] left-[30%] max-sm:hidden`} />
				<CoinFourLeft classname={`max-sm:top-[0] max-sm:left-[12%] sm:hidden`} />
				<CoinThreeLeft classname={`top-[20%] left-[12%] max-sm:hidden`} />
				<CoinFourLeft classname={`max-sm:top-[17%] max-sm:left-[30%] sm:hidden rotate-90`} />
				<CoinTwoLeft classname={`max-sm:top-[38%] max-sm:left-[5%] max-sm:rotate-[75deg] sm:hidden scale-x-[-1]`} />
				<CoinFourLeft classname={`top-[38%] left-[5%] rotate-90	sm:hidden`} />
				<CoinTwoLeft classname={`max-sm:top-[55%] max-sm:left-[30%] max-sm:rotate-[300deg] top-[65%] left-[17%]`} />
				<CoinTwoRight classname={`max-sm:top-[75%] max-sm:left-[12%] max-sm:-rotate-[30deg] top-[85%] left-[38%]`} />
				<CoinOneLeft classname={`-rotate-[30deg] top-[45%] left-[5%] max-sm:hidden max-w-[140px]`} />
				<PawnGifNormal classname={` right-[0%]`} />
			</div>
		</div>
	);
};

export default Page3;
