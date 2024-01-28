import React, { useContext } from 'react';
import style from './MainPage.module.scss';
import { LanguageContext } from 'src/hooks/useLanguageContext';
import ExperienceSection from 'src/components/organisms/ExperienceSection/ExperienceSection';
import NavigationList from 'src/components/molecules/NavigationList/NavigationList';

const MainPage = () => {
	const { content } = useContext(LanguageContext) as ILanguageContext;

	return (
		<div className={style.Container} id="main-section">
			<div className={style.Container__Inner}>
				<aside className={style.Navigation}>
					<NavigationList />
				</aside>
				<main className={style.Content}>
					{content.MenuNavigationContent.map((item) => (
						<ExperienceSection key={item.id} title={item.title} data={item.content} />
					))}
				</main>
			</div>
		</div>
	);
};

export default MainPage;
