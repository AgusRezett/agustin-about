import React, { useContext } from 'react';
import style from './NavigationList.module.scss';
import { LanguageContext } from 'src/hooks/useLanguageContext';
import { IoArrowUp, IoArrowUpCircle, IoLogoGithub } from 'react-icons/io5';

const NavigationList = () => {
	const { content, language } = useContext(LanguageContext) as ILanguageContext;

	const handleScroll = (sectionId: number) => {
		const elementId = `content-section-${sectionId}`;

		if (sectionId) {
			document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<ul className={style.NavigationList}>
			{content.MenuNavigationItems.map((item) => (
				<li
					key={`${item.value}`}
					className={style.NavigationItem}
					onClick={() => {
						handleScroll(item.value);
					}}
				>
					{item.label}
				</li>
			))}
			<li
				className={style.NavigationItem}
				onClick={() => {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
			>
				{language === 'en' ? 'Back to top' : 'Volver arriba'}
				<IoArrowUpCircle size={20} />
			</li>
		</ul>
	);
};

export default NavigationList;
