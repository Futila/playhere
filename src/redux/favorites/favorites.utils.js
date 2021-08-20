export const addItemToFavorite = (favoritesItems, ItemToAdd) =>{

    const existingFavoriteItem = favoritesItems.find(
        favoriteItem => favoriteItem.id === ItemToAdd.id
    );

    if(existingFavoriteItem){
        return favoritesItems.map(favoriteItem =>
        favoriteItem.id === ItemToAdd.id
            ? {...favoriteItem}
            : favoriteItem

        )
    }

    return [...favoritesItems, {...ItemToAdd}];
};


export const removeItemFromFavorite = (favoritesItems, ItemToRemove)=>{
    const existingFavoriteItem = favoritesItems.find(
        favoriteItem => favoriteItem.id === ItemToRemove.id
    )

    if(existingFavoriteItem.length < 1)return;

    return favoritesItems.filter(favoriteItem => favoriteItem.id !== ItemToRemove.id)
}
