import { createSlice } from "@reduxjs/toolkit";

const controlCenterSlice = createSlice({
    name : 'controlCenter',

    initialState : {
        wifi : true,
        bluetooth : false,
        airdrop : false,
    },

    reducers : {
        toggleWifi : (state)=>{
            state.wifi = !state.wifi;
        },

        toggleBluetooth : (state)=>{
            state.bluetooth = !state.bluetooth; 
        },

        toggleAirdrop : (state)=>{
            state.airdrop = !state.airdrop; 
        },
    }
})

export const { toggleWifi, toggleBluetooth, toggleAirdrop} = controlCenterSlice.actions;
export default controlCenterSlice.reducer;