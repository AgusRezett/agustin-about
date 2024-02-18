interface IAbout {
	name: string;
	lastName: string;
	profession: string;
	email: string;
	profile: string;
	seniority: string;
	linkedin: string;
	github: string;
}

interface IContentSections {
	id: number;
	title: string;
	content: IExperience[];
}

interface IExperience {
	title: string;
	subtitle?: string;
	additional?: string;
	period?: string;
	hyperlinks?: IHyperlink[];
	description: string;
	categories?: string[];
}

interface IHyperlink {
	name: string;
	link: string;
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
