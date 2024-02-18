import React from 'react';
import style from './CategoryTag.module.scss';

interface ICategoryTagProps {
	category: string;
}

const CategoryTag = ({ category }: ICategoryTagProps) => {
	return <li className={style.Category}>{category}</li>;
};

export default CategoryTag;
