import React from 'react';

interface IJobPositionProps {
	subtitle?: string;
}

const JobPosition = ({ subtitle }: IJobPositionProps) => {
	return <h4>{subtitle}</h4>;
};

export default JobPosition;
