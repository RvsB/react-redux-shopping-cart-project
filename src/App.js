import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {

	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			setToken(_token);
		}

		console.log(' I have a token >>>', token);
	}, []);


	return (
		//BEM
		<div className="app">
			{
				token ? (
					<h1>i am logged in</h1>
				) : (
					<Login />
				)
			}
		</div>
	);
}

export default App;