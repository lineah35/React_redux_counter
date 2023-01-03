import  { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice' //you can call it anything, these are from the reducer object 

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});