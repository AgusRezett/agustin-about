export const toggleTheme = () => {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const theme = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
	document.documentElement.setAttribute('data-theme', theme);
};
