// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://trensetters-spotify-clone.web.app";
const clientId = "b3cf1e4365ec4ea99e7c562dbd233320";

const scopes = [ // this basically contains the scopes we will have access to while using the app, it allows us to get the correct permissions to do things like play a song on spotify
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
];

export const getTokenFromUrl = () => { //this is to pull the access token from the url
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;//%20 is the ascii for a space, response_type=token means that once you get authenticated go ahead and give me back a token, its a string which represents your authentication


//#access_token=BQAMNFwsz3oh4GiqZoiG6iNmrxvNSeKMqY6S3Fg4PC1D9PraoZyLKWQcFdqaw8rkRz-XvY1-3Tg3Mg9xZTMRSJwf6O8L_IeO6PQvFJHu7zRwsnookXWfd5UsWOvsF24ucHyx6imd0IRqBFwQnlAYrj7Fp-w-CJxaRYQ&token_type=Bearer&expires_in=3600