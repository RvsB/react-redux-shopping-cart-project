export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove the token after developing
    // token: 'BQAf3CYo2lTTUu9YLp7taWmFiTUgDqcDTmyNG7Rny5qwYWRq-kJCUTX2z1ZTRZpUcWlhKqtYCcvNeORj3I8wUz6aPtCoXJqns0_XbVbmEADNDTiYFMbZy9eFp5ubtbnGzsjFsyjbHghOvYt8ZgsQg-jGnOO2HFiKK5A'
};


const reducer = (state, action) => { //here the state is automatically set as the intitial state we dont need to do state = initialState
    console.log(action); //this is really helpful to debug, so always console.log your action

    //action --> type, [payload] , we can call it payload or anything we want

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state, 
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, 
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }


};

export default reducer;