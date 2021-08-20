import FavoritesActionstypes from "./favorites.types";
import { addItemToFavorite, removeItemFromFavorite } from "./favorites.utils";

const INITIAL_STATE = {
    favoriteItems: []
}

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FavoritesActionstypes.ADD_ITEM:
            return {
                ...state, 
                favoriteItems: addItemToFavorite(state.favoriteItems, action.payload),
            };
        case FavoritesActionstypes.REMOVE_ITEM:
            return{
                ...state,
                favoriteItems: removeItemFromFavorite(state.favoriteItems, action.payload)
            }
        default:
            return state;
    }
}
export default favoritesReducer;