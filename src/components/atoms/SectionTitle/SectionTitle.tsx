import React from 'react';

interface ISectionTitleProps {
	title: string;
}

const SectionTitle = ({ title }: ISectionTitleProps) => {
	return <h2>{title}</h2>;
};

export default SectionTitle;
