import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getAllCampers = createAsyncThunk(
	"campers/getAll",
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get("/campers");
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const getCamperById = createAsyncThunk(
	"campers/getCamperById",
	async (camperId, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`/campers/${camperId}`);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
