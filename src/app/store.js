import { configureStore } from "@reduxjs/toolkit"
import countrySlice from "../feature/countrySlice"


const store = configureStore({
    reducer: {
        countries : countrySlice
    }
})

export default store