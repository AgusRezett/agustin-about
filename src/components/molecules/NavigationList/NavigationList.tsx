import React, { useContext } from 'react';
import style from './NavigationList.module.scss';
import { LanguageContext } from 'src/hooks/useLanguageContext';

const NavigationList = () => {
	const { content } = useContext(LanguageContext) as ILanguageContext;

	return (
		<ul className={style.NavigationList}>
			{content.MenuNavigationItems.map((item) => (
				<li key={`${item.value}`} className={`${style.NavigationItem} ${item.value === 1 ? style.NavigationItemActive : ''}`}>
					{item.label}
				</li>
			))}
		</ul>
	);
};

export default NavigationList;
