import { SetStateAction } from 'react';

export const toggleTheme = (setIsDarkMode: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }) => {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const theme = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
	document.documentElement.setAttribute('data-theme', theme);
	setIsDarkMode(theme === 'theme-dark');
};
