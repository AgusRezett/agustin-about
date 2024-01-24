import React from 'react';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import JobPosition from '../../atoms/JobPosition/JobPosition';
import EmploymentPeriod from '../../atoms/EmploymentPeriod/EmploymentPeriod';
import JobDescription from '../../atoms/JobDescription/JobDescription';

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
			<JobPosition position={position} />
			<EmploymentPeriod period={period} />
			<JobDescription description={description} />
		</section>
	);
};

export default ExperienceSection;
