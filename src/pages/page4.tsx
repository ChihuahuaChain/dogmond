// App.tsx
import React from 'react';
import BonePink from '../assets/bone-pink.webp';
import Dog2 from '../assets/dog2.webp';
import Button from '../components/connection/button';
import { CoinTwoLeft, CoinTwoRight, CoinFourLeft } from '../components/backgrounds/coins';

const Page4: React.FC = () => {
	return (
		<div className='relative xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%] flex flex-col items-center !min-h-[100vh]'>
			<CoinFourLeft classname={`max-sm:top-[10%] max-sm:left-[12%] sm:hidden`} />
			<CoinFourLeft classname={`max-sm:top-[30%] max-sm:left-[30%] sm:hidden rotate-90`} />
			<CoinTwoLeft classname={`max-sm:top-[65%] max-sm:left-[30%] max-sm:rotate-[300deg] sm:hidden`} />
			<CoinTwoRight classname={`max-sm:top-[85%] max-sm:left-[12%] max-sm:-rotate-[30deg] sm:hidden`} />
			<div className='relative w-full  max-sm:w-[150%] max-sm:-left-[25%]  m-auto top-[29%] sm:top-[30%] '>
				<img src={BonePink} alt='Dog Bone' className={`relative w-full h-auto`} />
				<img
					src={Dog2}
					alt='Dog head'
					className={`absolute max-sm:top-[18%] top-[16%] left-[31%] max-h-[12vw] max-sm:max-h-[13vw] max-w-[14%] max-sm:max-w-[12%] h-auto w-full -z-[1]`}
				/>

				<div
					className={`absolute -top-[3%] left-[50%] transform -translate-x-1/2 font-single text-PURPLE2 h-full min-h-full w-full min-w-full`}
				>
					<p
						className={`h-full min-h-full min-w-full flex justify-center items-center -rotate-[6deg] text-center font-single text-[#281B3D] text-[48px] max-sm:text-[24px]`}
					>
						How about buying more
						<br />
						instead, ser?
					</p>
					<DGMButton />
				</div>
				<Button
					onClick={() => {
						console.log('achete !!!');
					}}
					classname='absolute max-sm:mt-4 max-sm:top-[57%] max-sm:left-[52%] top-[60%] left-[50%] transform -translate-x-1/2 max-sm:-rotate-[6deg] !font-bold'
				>
					BUY $DGM
				</Button>
			</div>
		</div>
	);
};

export default Page4;

const DGMButton: React.FC = () => {
  return (
    <button className="absolute top-[40%] left-[65%] rotate-[6deg] bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 font-single text-white rounded-lg shadow-lg hover:scale-105">
      <span className="font-single text-[20px]"> $DGM </span>
    </button>
  );
};