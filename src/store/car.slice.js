import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from '../services';

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async () => {
        try {
            const cars = await carService.getAll();
            return cars;
        } catch (e) {

        }
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'Loading...';
            state.error = null;
        },
        [getAllCars.fulfield]: (state, action) => {
            state.status = 'Loading finished!';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {

        }

    }
});

const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;
export {carReducer};