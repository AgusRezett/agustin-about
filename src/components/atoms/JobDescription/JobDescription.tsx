import React from 'react';

interface IJobDescriptionProps {
	description: string;
}

const JobDescription = ({ description }: IJobDescriptionProps) => {
	return <p>{description}</p>;
};

export default JobDescription;
