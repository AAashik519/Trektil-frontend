
import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/bookings/bookingsSlice";
 

export const store =configureStore({
    reducer:{
        booking:bookingReducer
    }
})

