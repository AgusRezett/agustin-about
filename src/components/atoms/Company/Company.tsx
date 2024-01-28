import React from 'react';

interface ICompanyProps {
	title: string;
}

const Company = ({ title }: ICompanyProps) => {
	return <h3>{title}</h3>;
};

export default Company;
