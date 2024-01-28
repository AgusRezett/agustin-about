import React from 'react';
import './App.scss';
import Header from './components/organisms/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import About from './components/organisms/About/About';

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
