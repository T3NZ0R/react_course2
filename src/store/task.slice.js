import {createSlice} from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        tasks: [],
        status: null,
        error: null
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        }
    }
});

const taskReducer = taskSlice.reducer;

export const {addTask, deleteTask} = taskSlice.actions;
export {taskReducer};