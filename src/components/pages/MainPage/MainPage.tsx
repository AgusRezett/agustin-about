import React, { useContext } from 'react';
import './MainPage.module.scss';
import { LanguageContext } from 'src/hooks/useLanguageContext';

const MainPage = () => {
	const { content } = useContext(LanguageContext) as ILanguageContext;

	return (
		<main className="">
			<aside>
				<ul>
					{content.MenuNavigationItems.map((item) => (
						<li key={`${item.value}`}>{item.label}</li>
					))}
				</ul>
			</aside>
		</main>
	);
};

export default MainPage;
