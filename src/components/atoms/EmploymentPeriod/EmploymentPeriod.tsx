import React from 'react';

interface IEmploymentPeriodProps {
	period: string;
}

const EmploymentPeriod = ({ period }: IEmploymentPeriodProps) => {
	return (
		<p>
			<strong>{period}</strong>
		</p>
	);
};

export default EmploymentPeriod;
