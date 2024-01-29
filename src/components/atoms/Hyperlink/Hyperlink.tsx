import React from 'react';
import style from './Hyperlink.module.scss';

interface IHyperlinkProps {
	hyperlink: IHyperlink;
}

const Hyperlink = ({ hyperlink }: IHyperlinkProps) => {
	return (
		<a target="blank" href={hyperlink.link} className={style.Tag}>
			{hyperlink.name}
		</a>
	);
};

export default Hyperlink;
