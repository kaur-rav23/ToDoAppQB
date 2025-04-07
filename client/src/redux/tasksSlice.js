import {createSlice} from '@reduxjs/toolkit';

const tasksSlice= createSlice({
    name:'tasks',
    initialState:{
        list:JSON.parse(localStorage.getItem('tasks')) || [],
    },
    reducers:{
        addTask:(state,action)=>{
            state.list.push(action.payload);
            localStorage.setItem('tasks',JSON.stringify(state.list));
        },
        deleteTask:(state,action)=>{
            state.list.splice(action.payload,1);
            localStorage.setItem('tasks',JSON.stringify(state.list));
        }
    }
});

export const {addTask,deleteTask}=tasksSlice.actions;
export default tasksSlice.reducer;