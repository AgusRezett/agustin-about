import React, { useContext } from 'react';
import style from './NavigationList.module.scss';
import { LanguageContext } from 'src/hooks/useLanguageContext';

const NavigationList = () => {
	const { content } = useContext(LanguageContext) as ILanguageContext;

	const experienceSection = document.getElementById('content-section-1');
	const educationSection = document.getElementById('content-section-2');
	const proyectsSection = document.getElementById('content-section-3');
	const certificatesSection = document.getElementById('content-section-4');

	const handleScroll = (element: HTMLElement | null) => {
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<ul className={style.NavigationList}>
			{content.MenuNavigationItems.map((item) => (
				<li
					key={`${item.value}`}
					className={`${style.NavigationItem} ${item.value === 1 ? style.NavigationItemActive : ''}`}
					onClick={() => {
						switch (item.value) {
							case 1:
								handleScroll(experienceSection);
								break;
							case 2:
								handleScroll(educationSection);
								break;
							case 3:
								handleScroll(proyectsSection);
								break;
							case 4:
								handleScroll(certificatesSection);
								break;
							default:
								break;
						}
					}}
				>
					{item.label}
				</li>
			))}
		</ul>
	);
};

export default NavigationList;
