import React from 'react';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import Experience from 'src/components/molecules/Experience/Experience';

interface IExperienceSectionProps {
	title: string;
	position: string;
	period: string;
	description: string;
}

const ExperienceSection = ({ title, position, period, description }: IExperienceSectionProps) => {
	return (
		<section>
			<SectionTitle title={title} />
			<Experience position={position} period={period} description={description} />
		</section>
	);
};

export default ExperienceSection;
