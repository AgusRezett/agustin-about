import React from 'react';
import EmploymentPeriod from 'src/components/atoms/EmploymentPeriod/EmploymentPeriod';
import JobDescription from 'src/components/atoms/JobDescription/JobDescription';
import JobPosition from 'src/components/atoms/JobPosition/JobPosition';

interface IExperienceProps {
	position: string;
	period: string;
	description: string;
}

const Experience = ({ position, period, description }: IExperienceProps) => {
	return (
		<div>
			<JobPosition position={position} />
			<EmploymentPeriod period={period} />
			<JobDescription description={description} />
		</div>
	);
};

export default Experience;
