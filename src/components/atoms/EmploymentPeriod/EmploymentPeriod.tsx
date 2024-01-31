import React from 'react';
import style from './EmploymentPeriod.module.scss';

interface IEmploymentPeriodProps {
	period?: string;
}

const EmploymentPeriod = ({ period }: IEmploymentPeriodProps) => {
	return <p className={style.Text}>{period}</p>;
};

export default EmploymentPeriod;
