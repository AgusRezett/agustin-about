interface ILanguageContext {
	language: string;
	handleLanguageChange: (language: string) => void;
	content: IContent;
}
