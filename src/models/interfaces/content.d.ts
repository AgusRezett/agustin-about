interface IAbout {
	name: string;
	lastName: string;
	profession: string;
	email: string;
	profile: string;
	seniority: string;
}

interface IContentSections {
	id: number;
	title: string;
	content: IExperience[];
}

interface IExperience {
	company: string;
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
	MenuNavigationContent: IContentSections[];
	MenuNavigationItems: IMenuNavigationItem[];
}
