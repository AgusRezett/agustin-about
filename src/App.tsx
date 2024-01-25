import React, { useState } from 'react';
import './App.scss';
import Header from './components/organisms/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import { toggleTheme } from './utilities/themes';

const App = () => {
	const [scanning, setScanning] = useState(false);

	return (
		<div className={`app`}>
			<button onClick={() => toggleTheme(setScanning)}>Change</button>
			{scanning && <div className={`Scanner ${scanning ? 'ScannerAnimation' : ''}`}></div>}
			<Header />
			<MainPage />
		</div>
	);
};

export default App;
