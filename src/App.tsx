import React, { useState, useEffect } from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import { EthereumProvider } from './context/ethereum-context';
import ScrollToSell from './components/scroll-to-sell';
import Dog1 from './assets/dog1.webp';
import Dog3 from './assets/dog3.webp';
import Dog4 from './assets/dog4.webp';
import Dog5 from './assets/dog5.webp';
import Dog6 from './assets/dog6.webp';
import Dog7 from './assets/dog7.webp';
import { PawnGifNormal } from './components/backgrounds/coins';

const App: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 0 && !isVisible) {
				setIsVisible(true);
			} else if (scrollTop === 0 && isVisible) {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isVisible]);

	return (
		<EthereumProvider>
			<div className='relative flex flex-col justify-center items-center w-full !h-full !min-h-[100vh]'>
				<Page1 />
				<Page2
					dog={Dog1}
					message={['The journey to the end', 'is where the real gem awaits.', 'Are you up for the challenge?']}
				/>
				<Page3 />
				<Page4 />
				<Page2
					dog={Dog3}
					message={["Diamonds aren't formed without", 'pressure so give that scroll a', 'solid push!']}
				/>
				<Page3 />
				<Page2 dog={Dog4} message={['Keep your eyes on the prize,', 'and your finger on the scroll!']} />
				<Page3 />
				<Page2
					dog={Dog5}
					message={['Tired already? Well, buckle up!', 'The best is still ahead,', 'just a few more scrolls to go!']}
				/>
				<Page3 />
				<Page2 dog={Dog6} message={["Don't blink! You might miss", 'the hidden wonders waiting below!']} />
				<Page3 />
				<Page2 dog={Dog7} message={['Will you really let it go?']} />
				<ScrollToSell isVisible={isVisible} />
				<PawnGifNormal isVisible={isVisible} classname={` right-[0%]`} />
			</div>
		</EthereumProvider>
	);
};

export default App;
