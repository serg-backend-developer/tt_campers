import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore, persistReducer, FLUSH, REHYDRATE,
	PAUSE, PERSIST, PURGE, REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { campersReducer } from "./redux/campers/campersSlice";
import { favoritesReducer } from "./redux/favorites/favoritesSlice";
import { filtersReducer } from "./redux/filters/filtersSlice";

const persistConfig = {
	key: "favoriteCampers",
	storage,
};

export const store = configureStore({
	reducer: {
		campers: campersReducer,
		filters: filtersReducer,
		favorites: persistReducer(persistConfig, favoritesReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH, REHYDRATE, PAUSE,
					PERSIST, PURGE, REGISTER,
				],
			},
		}),
});

export const persister = persistStore(store);
