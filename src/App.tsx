import React from 'react';
import './App.scss';
import Header from './components/organisms/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import { toggleTheme } from './utilities/themes';

const App = () => {
	return (
		<div className={`app`}>
			<button onClick={toggleTheme}>Change</button>
			<Header />
			<MainPage />
		</div>
	);
};

export default App;
