import React from 'react';
import style from './ExperienceSection.module.scss';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import Experience from 'src/components/molecules/Experience/Experience';

interface IExperienceSectionProps {
	title: string;
	data: IExperience[];
}

const ExperienceSection = ({ title, data }: IExperienceSectionProps) => {
	return (
		<section className={style.Container}>
			<SectionTitle title={title} />
			{data.map((item) => (
				<Experience company={item.company} position={item.position} period={item.period} description={item.description} />
			))}
		</section>
	);
};

export default ExperienceSection;
