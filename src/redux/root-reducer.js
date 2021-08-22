import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tracksReducer from "./tracks/tracks.reducer";
import favoritesReducer from "./favorites/favorites.reducer";


const persistConfig = {
    key:'root',
    storage,
    whitelist: ['favorites']
}

const rootReducer = combineReducers({
    tracks: tracksReducer,
    favorites: favoritesReducer
});


export default persistReducer(persistConfig, rootReducer);