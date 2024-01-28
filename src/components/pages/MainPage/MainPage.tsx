import React, { useContext } from 'react';
import style from './MainPage.module.scss';
import { LanguageContext } from 'src/hooks/useLanguageContext';
import ExperienceSection from 'src/components/organisms/ExperienceSection/ExperienceSection';
import NavigationList from 'src/components/molecules/NavigationList/NavigationList';

const MainPage = () => {
	const { content } = useContext(LanguageContext) as ILanguageContext;

	return (
		<div className={style.Container} id="main-section">
			<aside className={style.Navigation}>
				<NavigationList />
			</aside>
			<main>
				{content.Experience.map((item) => (
					<ExperienceSection title={item.title} position={item.position} period={item.period} description={item.description} key={`${item.title}`} />
				))}
			</main>
		</div>
	);
};

export default MainPage;
