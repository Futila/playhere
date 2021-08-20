import { combineReducers } from "redux";

import tracksReducer from "./tracks/tracks.reducer";
import favoritesReducer from "./favorites/favorites.reducer";

const rootReducer = combineReducers({
    tracks: tracksReducer,
    favorites: favoritesReducer
});


export default rootReducer;