import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://6666f77ca2f8516ff7a5b0dc.mockapi.io"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_,thunkAPI) => {
    try {
        const response = axios.get(`/contacts`)
        return response
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    } 
})