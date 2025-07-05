import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSlice'
import controlCenterReducer from '../features/controlCenterSlice'
import globalReducer from '../features/globalSlice'

const store = configureStore({
    reducer : {
        global : globalReducer,
        counter : counterReducer,
        controlCenter : controlCenterReducer,
    },
});

export default store;