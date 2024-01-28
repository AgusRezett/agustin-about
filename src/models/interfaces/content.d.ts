interface IExperience {
	title: string;
	position: string;
	period: string;
	description: string;
}

interface IMenuNavigationItem {
	label: string;
	value: number;
}

interface IContent {
	Experience: IExperience[];
	MenuNavigationItems: IMenuNavigationItem[];
}
