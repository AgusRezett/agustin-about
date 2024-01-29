import React from 'react';
import style from './JobDescription.module.scss';

interface IJobDescriptionProps {
	description: string;
}

const JobDescription = ({ description }: IJobDescriptionProps) => {
	const isList = description.includes(`/s`);
	return !isList ? (
		<p>{description}</p>
	) : (
		<ul className={style.List}>
			{description.split(`/s`).map((item) => (
				<li key={item} className={style.List__Item}>
					<span className={style.List__Item__Point}></span>
					<div>
						<span className={style.List__Item__FirstWord}>{item.split(' ')[0]} </span>
						<span>{item.split(' ').slice(1).join(' ')}</span>
					</div>
				</li>
			))}
		</ul>
	);
};

export default JobDescription;
