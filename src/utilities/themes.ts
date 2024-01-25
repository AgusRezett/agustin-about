import { SetStateAction } from 'react';

export const toggleTheme = (setScanning: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }) => {
	setScanning(true);
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const theme = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';

	document.documentElement.setAttribute('data-theme', theme);
	setTimeout(() => {
		setScanning(false);
	}, 1000);
};
