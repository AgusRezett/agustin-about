import React from 'react';
import style from './JobPosition.module.scss';

interface IJobPositionProps {
	subtitle?: string;
	additional?: string;
}

const JobPosition = ({ subtitle, additional }: IJobPositionProps) => {
	return (
		<h4 className={style.Text}>
			{subtitle}
			<span className={style.Additional}>- {additional}</span>
		</h4>
	);
};

export default JobPosition;
