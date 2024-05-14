
import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/bookings/bookingsSlice";

import { setupListeners } from '@reduxjs/toolkit/query'
import { attractionApi } from "./services/attraction";
 

export const store =configureStore({
    reducer:{
        booking:bookingReducer,

        [attractionApi.reducerPath]:attractionApi.reducer
    },
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(attractionApi.middleware)
})


setupListeners(store.dispatch)
