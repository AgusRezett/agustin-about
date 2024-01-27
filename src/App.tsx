import React from 'react';
import './App.scss';
import Header from './components/organisms/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';

const App = () => {
	return (
		<div className={`app`}>
			<Header />
			<MainPage />
		</div>
	);
};

export default App;
