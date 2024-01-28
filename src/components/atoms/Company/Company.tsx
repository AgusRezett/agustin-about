import React from 'react';

interface ICompanyProps {
	company: string;
}

const Company = ({ company }: ICompanyProps) => {
	return <h2>{company}</h2>;
};

export default Company;
