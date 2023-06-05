import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    status: "",
    posts: [],
    error: null
};

const COUNTRY_URL =
  "https://restcountries.com/v3.1/all";

//fetch
export const fetchCountries = createAsyncThunk("posts/fetchCountries", async () => {
  //Request data
  const response = await axios.get(COUNTRY_URL);
  return [...response.data];
});

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: { },
  extraReducers(builder){
      builder
        /*fetchCountries  */
        .addCase(fetchCountries.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchCountries.fulfilled, (state, action) => {
          state.status = "succeeded";  
          state.posts = action.payload;
          console.log(state.posts)
        })
        .addCase(fetchCountries.rejected, (state, action) => {
          state.status = "failed";
            state.error = action.error.message;
            console.log(state.error)
        });
  }
});

export const selectByName = (state, postName) =>
  state.countries.posts.find((post) => post.name.common === postName);
export const error = (state) => state.countries.error;
export const status = (state) => state.countries.status;
export const allPosts = (state) => state.countries.posts;
export default countrySlice.reducer;

