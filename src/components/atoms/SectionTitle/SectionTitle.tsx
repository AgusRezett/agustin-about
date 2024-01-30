import React from 'react';
import style from './SectionTitle.module.scss';

interface ISectionTitleProps {
	title: string;
}

const SectionTitle = ({ title }: ISectionTitleProps) => {
	return <h2 className={style.Title}>{title}</h2>;
};

export default SectionTitle;
