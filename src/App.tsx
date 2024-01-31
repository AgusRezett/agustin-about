import React from 'react';
import './App.scss';
import Header from './components/organisms/Header/Header';
import About from './components/organisms/About/About';
import MainPage from './components/pages/MainPage/MainPage';

const App = () => {
	return (
		<div className={`app`}>
			<Header />
			<About />
			<MainPage />
		</div>
	);
};

export default App;
