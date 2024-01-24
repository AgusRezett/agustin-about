import React from 'react';

interface IJobPositionProps {
	position: string;
}

const JobPosition = ({ position }: IJobPositionProps) => {
	return <h3>{position}</h3>;
};

export default JobPosition;
