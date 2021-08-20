import FavoritesActionstypes from "./favorites.types";

export const addItem = item =>({
    type: FavoritesActionstypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: FavoritesActionstypes.REMOVE_ITEM,
    payload: item
})

