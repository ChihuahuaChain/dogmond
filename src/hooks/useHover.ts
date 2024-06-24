// hooks/useHover.ts
import { useState } from 'react';

interface UseHoverReturn {
	isHovered: boolean;
	bind: {
		onMouseEnter: () => void;
		onMouseLeave: () => void;
	};
}

const useHover = (): UseHoverReturn => {
	const [isHovered, setIsHovered] = useState(false);

	const bind = {
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false)
	};

	return { isHovered, bind };
};

export default useHover;
