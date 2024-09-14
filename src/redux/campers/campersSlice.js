import { createSlice } from "@reduxjs/toolkit";

import { getAllCampers, getCamperById } from "./campersOps";
import { changeFilter } from "../filters/filtersSlice";

const pending = (state) => {
	state.loading = true;
};

const rejected = (state, action) => {
	state.loading = false;
	state.error = action.payload;
};

const campersSlice = createSlice({
	name: "campers",
	initialState: {
		page: 1,
		items: [],
		camper: null,
		loading: false,
		error: null,
	},
	reducers: {
		changePage(state, { payload }) {
			state.page = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllCampers.pending, pending)
			.addCase(
				getAllCampers.fulfilled,
				(state, { payload: { items } }) => {
					state.loading = false;
					state.error = null;
					state.page = 1;
					state.items = items;
				}
			)
			.addCase(getAllCampers.rejected, rejected)
			.addCase(getCamperById.pending, pending)
			.addCase(getCamperById.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.error = null;
				state.camper = payload;
			})
			.addCase(getCamperById.rejected, rejected)
			.addCase(changeFilter, (state) => {
				state.page = 1;
			});
	},
});

export const { changePage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
