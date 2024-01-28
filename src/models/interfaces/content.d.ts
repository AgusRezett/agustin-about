interface IAbout {
	name: string;
	lastName: string;
	profession: string;
	email: string;
	profile: string;
	seniority: string;
}

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
	About: IAbout;
	Experience: IExperience[];
	MenuNavigationItems: IMenuNavigationItem[];
}
