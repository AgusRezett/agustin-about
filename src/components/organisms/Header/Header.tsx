import React, { useContext, useState } from 'react';
import style from './Header.module.scss';
import { IoGlobe, IoMoon, IoSunny } from 'react-icons/io5';
import { toggleTheme } from 'src/utilities/themes';
import { LanguageContext } from 'src/hooks/useLanguageContext';

const Header = () => {
	const languageContext = useContext(LanguageContext);
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<header className={style.Container}>
			<a className={style.Name} href="/">
				<h1>Agustin Rezett</h1>
			</a>
			<div className={style.Menu}>
				<span className={style.Menu__item} onClick={() => languageContext.handleLanguageChange(languageContext.language === 'en' ? 'es' : 'en')}>
					<button className={style.Menu__item__button} aria-label="Change language">
						<IoGlobe size={20} />
						{languageContext.language === 'en' ? <p>EN</p> : <p>ES</p>}
					</button>
				</span>
				<span className={style.Menu__item} onClick={() => toggleTheme(setIsDarkMode)}>
					<button className={style.Menu__item__button}>
						<IoMoon size={20} className={`${isDarkMode ? style.Icon__moon__animation__hide : ''}`} />
						<IoSunny size={20} className={`${style.Icon__sun} ${isDarkMode ? '' : style.Icon__sun__animation__hide}`} />
					</button>
				</span>
			</div>
		</header>
	);
};

export default Header;
