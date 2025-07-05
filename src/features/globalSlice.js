import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
    name : 'global',

    initialState : {
        musicPlay : false,
        darkmode : true,
        fullscreen : false,
        appleMenuTag : false,
        controlCenterTag : false,
        brightness : 95,
        sound : 66,
        bg_id : 2,
        max_bg_id : 6,
        batteryMenu : false,
        wifiMenu : false,
        sidebarMenu : false,
        rebootTag : true,
        apps : [],
        loading : true,
    },

    reducers : {
        toggleMusic : (state)=>{
            state.musicPlay = !state.musicPlay;
        },

        toggleDarkmode : (state)=>{
            state.darkmode = !state.darkmode;
        },

        toggleFullscreen : (state)=>{
            state.fullscreen = !state.fullscreen;
        },

        toggleAppleMenuTag : (state, action)=>{
            state.appleMenuTag = action.payload;
        },

        toggleControlCenterTag : (state, action)=>{
            state.controlCenterTag = action.payload;
        },

        changeBrightnessLevel : (state, action)=>{
            state.brightness = action.payload;
        },

        changeSoundLevel : (state, action)=>{
            state.sound = action.payload;
        },
        
        setBgId : (state, action)=>{
            state.bg_id = action.payload;
        },

        addApp : (state, action)=>{
            let flag = true;
            state.apps.forEach((app)=>{
                if(app.name===action.payload.name){
                    flag = false;
                    state.apps = [...state.apps.filter(app=>app.name!==action.payload.name), action.payload]
                }
            })
            if (flag){
                state.apps = [...state.apps, action.payload];
            }
            console.log('apps array')
            console.log(state.apps);
        },

        removeApp : (state, action)=>{
            console.log(action.payload);
            state.apps = [...state.apps.filter(app=>app.name!==action.payload.name)];
            console.log('apps array');
            console.log(state.apps);
        },

        toggleBatteryMenu : (state, action)=>{
            state.batteryMenu = action.payload;
        },

        toggleWifiMenu : (state, action)=>{
            state.wifiMenu = action.payload;
        },

        toggleSidebarMenu : (state, action)=>{
            state.sidebarMenu = action.payload;
        },
        
        setReboot : (state, action)=>{
            state.rebootTag = action.payload;
        },

        setLoading : (state, action)=>{
            state.loading = action.payload;
        },
    }

});

export const { toggleMusic, toggleDarkmode, toggleFullscreen, toggleAppleMenuTag, toggleControlCenterTag, changeBrightnessLevel, changeSoundLevel, setBgId, setMaxBgId, addApp, removeApp, toggleBatteryMenu, toggleWifiMenu, toggleSidebarMenu, setReboot, setLoading } = globalSlice.actions;
export default globalSlice.reducer;