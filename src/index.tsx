import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IconContext } from 'react-icons';
import { LanguageProvider } from './hooks/useLanguageContext';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<IconContext.Provider value={{ className: 'global-icons' }}>
			<LanguageProvider>
				<App />
				<SpeedInsights />
				<Analytics />;
			</LanguageProvider>
		</IconContext.Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
