import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
	const [{user, token}, dispatch] = useDataLayerValue(); //basically this returns the useReducer function to the useDataLayerValue or we can say we destructure the state and dispatch from the useReducer provided as a value prop to the DataLayerContext.provider

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {

			dispatch({
				type: 'SET_TOKEN',
				token: _token
			})

			spotify.setAccessToken(_token); //gives the access token to spotify, allows spotify to safely talk to react
			spotify.getMe()
			.then(user => {
				dispatch({
					type: 'SET_USER',
					user: user //here the first user is the name of the property of the action object and the other one the user object that gets returned from the getMe() method.
				})
			}); //this returns a promise

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				})
			})

		}

	}, []);

	return (
		//BEM
		<div className="app">
			{
				token ?
					<Player spotify={spotify} /> : (
					<Login />
				)
			}
		</div>
	);
}

export default App;