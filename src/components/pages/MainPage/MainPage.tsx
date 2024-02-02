import React, { useContext } from 'react';
import style from './MainPage.module.scss';
import navigationStyle from '../../molecules/NavigationList/NavigationList.module.scss';
import { LanguageContext } from 'src/hooks/useLanguageContext';
import ExperienceSection from 'src/components/organisms/ExperienceSection/ExperienceSection';
import NavigationList from 'src/components/molecules/NavigationList/NavigationList';
import SocialButton from 'src/components/atoms/SocialButton/SocialButton';
import { IoArrowUpCircle, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const MainPage = () => {
	const { content, language } = useContext(LanguageContext) as ILanguageContext;

	return (
		<div className={style.Container} id="main-section">
			<article className={style.SocialButtonsContainer}>
				<SocialButton Icon={IoLogoGithub} hyperlink={content.About.github} label="Github" />
				<SocialButton Icon={IoLogoLinkedin} hyperlink={content.About.linkedin} label="LinkedIn" />
			</article>
			<div className={style.Container__Inner}>
				<aside className={style.Navigation}>
					<NavigationList />
				</aside>
				<main className={style.Content}>
					{content.MenuNavigationContent.map((item) => (
						<ExperienceSection key={item.id} data={item.content} id={item.id} title={item.title} />
					))}
					<button
						className={`${style.NavigationItem} ${navigationStyle.NavigationItem}`}
						onClick={() => {
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					>
						{language === 'en' ? 'Back to top' : 'Volver arriba'}
						<IoArrowUpCircle size={20} />
					</button>
				</main>
			</div>
		</div>
	);
};

export default MainPage;
