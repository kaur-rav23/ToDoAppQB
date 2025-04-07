import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasksSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        auth: authReducer
    },
});