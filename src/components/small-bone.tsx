import React from 'react';
import BonePink from '../assets/bone-pink.webp';
import BoneWhite from '../assets/bone-white.webp';

type BoneProps = {
	text: string[];
	imageDog: string;
	colorBone: string;
};

const Bone: React.FC<BoneProps> = ({ text, imageDog, colorBone }) => {
	return (
		<div className='relative top-[29%] sm:top-[30%] '>
			<img
				src={colorBone === 'white' ? BoneWhite : BonePink}
				alt='Dog Bone'
				className={`relative max-h-[50vw] max-sm:max-h-[70vw] sm:max-w-[55%] w-full h-auto`}
			/>
			<img
				src={imageDog}
				alt='Dog head'
				className={`absolute max-sm:left-[50%] top-[4%] max-h-[16vw] max-w-[20%] sm:top-[0%] sm:max-h-[12vw] sm:max-w-[14%] h-auto w-full`}
			/>

			<div
				className={`absolute max-sm:top-0 max-sm:left-0
			 ${
					text.length === 3 ? 'sm:top-[0%]' : text.length === 2 ? 'sm:top-[0%]' : 'sm:-top-[3%]'
				} left-[10%] sm:left-[28%] sm:transform sm:-translate-x-1/2 font-single text-PURPLE2 h-full min-h-full max-sm:w-full max-sm:min-w-full`}
			>
				<p
					className={` h-full min-h-full min-w-full flex justify-center items-center -rotate-[6deg] text-center font-single text-PURPLE2 text-[26px] max-sm:text-[18px]`}
				>
					{text.map((t, i) => (
						<React.Fragment key={i}>
							{t}
							<br />
						</React.Fragment>
					))}
				</p>
			</div>
		</div>
	);
};

export default Bone;
