import React, { createContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

// Content
import SpanishContent from '../../languages/es-AR.json';
import EnglishContent from '../../languages/en-US.json';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
	const location = window.location.pathname;
	const defaultLang = 'en';

	const [lang, setLang] = useState(document.documentElement.lang);

	const handleLanguageChange = () => {
		const newLang = lang === 'en' ? 'es' : 'en';
		// Update the language state
		setLang(newLang);
		// Update the HTML lang attribute
		document.documentElement.setAttribute('lang', newLang);
		// Update the URL with the new language
		const newLocation = location.replace(lang, newLang);
		window.history.pushState({}, '', newLocation);
	};

	const contextValue = useMemo(
		() => ({ language: lang, handleLanguageChange: handleLanguageChange, content: lang === 'en' ? EnglishContent : SpanishContent }),
		[lang]
	);

	// Set the language state based on the URL
	useEffect(() => {
		(location.includes('/es') || location.includes('/en')) && setLang(location.split('/')[1]);
		(!location.includes('/') || location === '/') && setLang(defaultLang);
	}, []);

	return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { LanguageContext, LanguageProvider };
