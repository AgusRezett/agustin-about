import React from 'react';
import Company from 'src/components/atoms/Company/Company';
import EmploymentPeriod from 'src/components/atoms/EmploymentPeriod/EmploymentPeriod';
import JobDescription from 'src/components/atoms/JobDescription/JobDescription';
import JobPosition from 'src/components/atoms/JobPosition/JobPosition';

interface IExperienceProps {
	company: string;
	position: string;
	period: string;
	description: string;
}

const Experience = ({ title, subtitle, period, hyperlink, hyperlinkName, description }: IExperience) => {
	return (
		<div>
			<Company title={title} />
			<EmploymentPeriod period={period} />
			<JobPosition subtitle={subtitle} />
			<JobDescription description={description} />
		</div>
	);
};

export default Experience;
