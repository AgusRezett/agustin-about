import React from 'react';
import style from './ExperienceSection.module.scss';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import Experience from 'src/components/molecules/Experience/Experience';

interface IExperienceSectionProps {
	id: string | number;
	title: string;
	data: IExperience[];
}

const ExperienceSection = ({ id, title, data }: IExperienceSectionProps) => {
	id = `content-section-${id}`;

	return (
		<section className={style.Container} id={id}>
			<SectionTitle title={title} />
			{data.map((item) => (
				<Experience key={`${id}${item.title}`} title={item.title} subtitle={item.subtitle} period={item.period} description={item.description} />
			))}
		</section>
	);
};

export default ExperienceSection;
