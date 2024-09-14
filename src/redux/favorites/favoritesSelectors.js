export const selectFavoritesCampers = (state) => state.favorites.items;

export const selectFavoriteCamper = (state, id) =>
	state.favorites.items.some((camper) => camper.id === id);
