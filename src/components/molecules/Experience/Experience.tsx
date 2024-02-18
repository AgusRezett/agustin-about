import React from 'react';
import style from './Experience.module.scss';
import Company from 'src/components/atoms/Company/Company';
import EmploymentPeriod from 'src/components/atoms/EmploymentPeriod/EmploymentPeriod';
import Hyperlink from 'src/components/atoms/Hyperlink/Hyperlink';
import JobDescription from 'src/components/atoms/JobDescription/JobDescription';
import JobPosition from 'src/components/atoms/JobPosition/JobPosition';
import CategoriesList from '../CategoriesList/CategoriesList';

interface IExperienceProps {
	data: IExperience;
}

const Experience = ({ data }: IExperienceProps) => {
	const { categories, title, period, subtitle, additional, hyperlinks, description } = data;

	return (
		<div className={style.Container}>
			<Company title={title} />
			{period && <EmploymentPeriod period={period} />}
			{subtitle && <JobPosition subtitle={subtitle} additional={additional} />}
			{hyperlinks?.length && (
				<div className={style.Hyperlinks__container}>
					{hyperlinks.map((item) => (
						<Hyperlink key={item.link} hyperlink={item} />
					))}
				</div>
			)}
			{description && <JobDescription description={description} />}
			{categories?.length && <CategoriesList categories={categories} />}
		</div>
	);
};

export default Experience;
