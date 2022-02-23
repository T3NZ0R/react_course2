import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";


const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        tasks: [],
        completedCount: 0
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: uuid(),
                status: false,
                ...action.payload.data
            })
        },
        deleteTask: (state, action) => {

            state.tasks.map(task => task.id === action.payload.id && task.status === true ?
                state.completedCount = state.completedCount - 1 : state.completedCount);

            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);

            console.log("Comleted" + state.completedCount);

        },
        completeTask: (state, action) => {

            const {status, id} = action.payload.data;

            state.tasks = state.tasks.map(task => task.id === id ? {...task, status: status} : task);

            if (status === true) {
                state.completedCount = state.completedCount + 1;
            } else {
                state.completedCount = state.completedCount - 1;
            }
            console.log("Comleted" + state.completedCount);
        }

    }
});

const taskReducer = taskSlice.reducer;

export const {addTask, deleteTask, completeTask} = taskSlice.actions;
export {taskReducer};