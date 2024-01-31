import React from 'react';
import style from './Hyperlink.module.scss';
import { IoChevronForward } from 'react-icons/io5';

interface IHyperlinkProps {
	hyperlink: IHyperlink;
}

const Hyperlink = ({ hyperlink }: IHyperlinkProps) => {
	return (
		<a target="_blank" href={hyperlink.link} className={style.Tag}>
			<IoChevronForward className={style.Icon} />
			{hyperlink.name}
		</a>
	);
};

export default Hyperlink;
