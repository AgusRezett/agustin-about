import React, { useContext, useEffect, useState } from 'react';
import style from './Header.module.scss';
import { IoGlobe, IoMoon, IoSunny } from 'react-icons/io5';
import { toggleTheme } from 'src/utilities/themes';
import { LanguageContext } from 'src/hooks/useLanguageContext';

const Header = () => {
	const languageContext = useContext(LanguageContext) as ILanguageContext;
	const isEnglishMode = languageContext.language === 'en';
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
	}, []);

	return (
		<header className={style.Container}>
			<a className={style.Name} href="/">
				<h1>
					{languageContext.content.About.name}{' '}
					{languageContext.content.About.lastName}
				</h1>
			</a>
			<div className={style.Menu}>
				<span
					className={style.Menu__item}
					onClick={() =>
						languageContext.handleLanguageChange(isEnglishMode ? 'es' : 'en')
					}
				>
					<button
						className={style.Menu__item__button}
						aria-label={isEnglishMode ? 'English Mode' : 'Spanish Mode'}
					>
						<IoGlobe size={20} />
						{isEnglishMode ? <p>EN</p> : <p>ES</p>}
					</button>
				</span>
				<span
					className={style.Menu__item}
					onClick={() => toggleTheme(setIsDarkMode)}
				>
					<button
						className={style.Menu__item__button}
						aria-label={isDarkMode ? 'Toggle light mode' : 'Toggle dark Mode'}
					>
						<IoMoon
							size={20}
							className={`${
								isDarkMode ? style.Icon__moon__animation__hide : ''
							}`}
						/>
						<IoSunny
							size={20}
							className={`${style.Icon__sun} ${
								isDarkMode ? '' : style.Icon__sun__animation__hide
							}`}
						/>
					</button>
				</span>
			</div>
		</header>
	);
};

export default Header;
