import React, { useRef, useState } from 'react';
import style from './CategoriesList.module.scss';
import CategoryTag from 'src/components/atoms/Category/CategoryTag';
import { IoCaretDown, IoClose } from 'react-icons/io5';

interface ICategoriesListProps {
	categories: string[];
}

const CategoriesList = ({ categories }: ICategoriesListProps) => {
	const [isCategoriesListExpanded, setIsCategoriesListExpanded] = useState(false);
	const categoriesListRef = useRef<HTMLUListElement | null>(null);

	const handleCategoriesList = () => {
		setIsCategoriesListExpanded(!isCategoriesListExpanded);
		if (categoriesListRef.current) {
			// @ts-ignore
			categoriesListRef.current.style.maxHeight = !isCategoriesListExpanded ? categoriesListRef.current.scrollHeight + 'px' : '28px';
		}
	};

	return (
		<div className={style.Categories__container}>
			<button className={style.Categories__button} onClick={handleCategoriesList}>
				<IoClose
					size={16}
					className={`${style.Categories__toggler} ${style.Categories__toggler__close} ${
						!isCategoriesListExpanded ? style.Categories__toggler__hide : ''
					}`}
				/>
				<IoCaretDown size={16} className={`${style.Categories__toggler}  ${isCategoriesListExpanded ? style.Categories__toggler__hide : ''}`} />
			</button>
			<ul ref={categoriesListRef} className={`${style.Categories__list} `}>
				{categories.map((category) => (
					<CategoryTag key={category} category={category} />
				))}
			</ul>
		</div>
	);
};

export default CategoriesList;
