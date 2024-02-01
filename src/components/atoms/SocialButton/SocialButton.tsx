import React from 'react';
import style from './SocialButton.module.scss';
import { IconType } from 'react-icons';

interface ISocialButtonProps {
	Icon: IconType;
	hyperlink: string;
	label: string;
}

const SocialButton = ({ Icon, label, hyperlink }: ISocialButtonProps) => {
	return (
		<a className={style.Container} href={hyperlink} target="_blank" aria-label={`Open ${label}`}>
			<Icon size={20} />
			<p>{label}</p>
		</a>
	);
};

export default SocialButton;
