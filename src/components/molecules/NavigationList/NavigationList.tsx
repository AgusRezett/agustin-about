import React, { useContext } from 'react';
import style from './NavigationList.module.scss';
import { LanguageContext } from 'src/hooks/useLanguageContext';

const NavigationList = () => {
	const { content } = useContext(LanguageContext) as ILanguageContext;

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
					className={`${style.NavigationItem} ${item.value === 1 ? style.NavigationItemActive : ''}`}
					onClick={() => {
						handleScroll(item.value);
					}}
				>
					{item.label}
				</li>
			))}
		</ul>
	);
};

export default NavigationList;
