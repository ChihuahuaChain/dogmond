import React from 'react';
import TextField from './text-field';
import ButtonClaim from './connection/button-claim';
import Background12 from './backgrounds/background12';

const Title: React.FC = () => {
	return (
		<div className='relative flex flex-col items-center justify-center max-w-[1140px] w-[100%]'>
			<Background12 comingFrom='title' />
			<h1 className='font-single text-WHITE text-[108px] max-sm:text-[56px]'>Dogmond</h1>
			<h2 className='text-center font-single text-YELLOW text-[32px] max-sm:text-[24px]'>
				The first ever made meme rollapp on Dymension
			</h2>
			<div className='flex max-[420px]:flex-col max-sm:min-w-full max-sm:justify-evenly justify-center items-center gap-8 max-sm:gap-3 '>
				<TextField />
				<ButtonClaim onClick={() => console.log('call db Dym')}>Claim</ButtonClaim>
			</div>
		</div>
	);
};

export default Title;
