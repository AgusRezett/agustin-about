interface ILanguageContext {
	language: string;
	setLanguage: (language: string) => void;
	content: IContent;
}
