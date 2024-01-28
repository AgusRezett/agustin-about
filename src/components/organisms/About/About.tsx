import React, { useContext } from 'react';
import style from './About.module.scss';
import FirstPic from '../../../assets/profile-pic.png';
import SecondPic from '../../../assets/profile-pic-2.png';
import { LanguageContext } from 'src/hooks/useLanguageContext';

const About = () => {
	const { content } = useContext(LanguageContext) as ILanguageContext;

	const startDate = new Date('02/01/2021');
	const today = new Date();
	let yearsExperience = today.getFullYear() - startDate.getFullYear();

	// If the current month is before February, subtract 1 from the years difference
	if (today.getMonth() < startDate.getMonth()) {
		yearsExperience--;
	}

	return (
		<article className={style.Container} id="about-section">
			<div className={style.ProfilePicContainer}>
				<img className={`${style.ProfilePic} ${style.ProfilePic__First}`} src={FirstPic} alt="Agustin profile's" />
				<img className={`${style.ProfilePic} ${style.ProfilePic__Second}`} src={SecondPic} alt="Agustin profile's" />
			</div>
			<h1 className={style.Title}>{content.About.profession}</h1>
			<p className={style.Description}>{content.About.profile.replace('YEARS_EXPERIENCE', String(yearsExperience))}</p>
		</article>
	);
};

export default About;
