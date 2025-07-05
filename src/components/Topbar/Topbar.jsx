import './Topbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleControlCenterTag, toggleAppleMenuTag, toggleBatteryMenu, toggleWifiMenu, toggleSidebarMenu } from '../../features/globalSlice'
import AppleLogo from '../../assets/apple_logo.png'
import BatteryLogo from '../../assets/bettery.png'
import ControlCenterLogo from '../../assets/controlCenter.png'
import Clock from '../Clock/Clock'
import { useEffect, useState } from 'react'


export default function Topbar(){

    const dispatch = useDispatch();
    const controlCenterTag = useSelector((state)=>state.global.controlCenterTag);
    const appleMenuTag = useSelector((state)=>state.global.appleMenuTag);
    const batteryMenu = useSelector((state)=>state.global.batteryMenu);
    const wifiMenu = useSelector((state)=>state.global.wifiMenu);
    const sidebarMenu = useSelector((state)=>state.global.sidebarMenu);
    const apps = useSelector((state)=>state.global.apps)
    const [clock, setClock] = useState(Clock());

    useEffect(()=>{
        setInterval(()=>{
            setClock(Clock());
        }, 10000);
    })

    return (
        <div className="topbar-main">
            <div className="topbar-left">
                <Tab image={true} src={AppleLogo} onClick={()=>{(appleMenuTag)?dispatch(toggleAppleMenuTag(false)):dispatch(toggleAppleMenuTag(true)); dispatch(toggleControlCenterTag(false)); dispatch(toggleBatteryMenu(false)); dispatch(toggleWifiMenu(false));dispatch(toggleSidebarMenu(false));}}/>
                <Tab text={(apps.length>0)?apps[apps.length-1].name:'Finder'} bold={true} />
            </div>

            <div className="topbar-right">
                <Tab image={true} onClick={()=>{dispatch(toggleControlCenterTag(false)); dispatch(toggleAppleMenuTag(false)); dispatch(toggleWifiMenu(false)); (batteryMenu)?dispatch(toggleBatteryMenu(false)):dispatch(toggleBatteryMenu(true)); dispatch(toggleSidebarMenu(false));}} src={BatteryLogo} paddingLeft={'17px'} paddingRight={'17px'} height={'0.8rem'}/>
                <Tab image={true} onClick={()=>{ (wifiMenu)?dispatch(toggleWifiMenu(false)):dispatch(toggleWifiMenu(true)); dispatch(toggleControlCenterTag(false)); dispatch(toggleAppleMenuTag(false)); dispatch(toggleBatteryMenu(false)); dispatch(toggleSidebarMenu(false));}} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCUlEQVR4nO2Zz28MYRjHp0X9aEoXkW6laJOm4tD/QLIOfl1I3KQqYsvJRQgJF26V9KJcxEUkDqwfTQjiQIKkEVJUQtKVIKmgkroIau1+5ImHTrYzszOzszuzMZ9kLu+8z/t+vzvvj+d91zBiYmJiYmoRoA5YA6SBE8AVYBR4C0wCP/WZ1LJRrdMP7NbYurDELwJ2AVeBCcpnQs3tBBZWw8AG4DLwncrxDcgA64MWPxvoAZ5SfUaA7cCsck2sA54TPq+ATX4MJHXMRo2MaHNrYiPwgejyGdhSai6cAgpEnwIwKJqLTTQBt8poOK9zSRrfA6SAdiABzNEnoWUprTOoMRLrl5ui3TwfRnyKv6eilnieiNM/4lJgr7aV96FDtCeloWseA2UPOQN0+RXvYKoLOAv88KhpSIKXAS9dBlwHVgVtwMLQcuC8y/ma/beSAW3AG4fKkiOlSnS+GNgKDOjYzVrkWmP6bkDrJlzsY+8cdInmtuKgDmDcovJFoNmmowZgB3AbyOGdnBqTzKHBpo9m3T+KEa0ddr/AauCjqfIxq8wUmAscAN4THCJsv5UhzbCPm+p+Eq1OX1OCurVi2ub9Zh02lWLMLh3RtF+0dTuaMAU0WZTNB05XacMs6OY8z40218g+ATyk+jySVdW38CIT7RUeSqV4LRqCMCJJ5FSIRqZEQ1BfZZvL5fUX8AA4BKwFOoFGfTq17LDWkbqlyEnfgZgwmelxyIUkpTgJtHhoL6mJo93XzkufgZowdd5nsWpJ1ryijDZX6oZqRvroC1b9zI73mTrrL/s8Pb3hyZD7+8UPBqO2dMcyB3odUoq0XhXJavdVn6yWpR1Snl5p2wgTTVuOAl9cTGJJII9IjBElgFZgGO88kTliRMjEOP6R2NawfRg6UeXE6JdzQL0RBYB64IIPE5kZNyFhI8swcMmDiSG5XTGiCH9OjDdcmLhjlaJHCj233HUwIceBRqMWABYA9y1MDJd1MArxz6DHJhPPSt2aRBZNV+Qm8IXcKBq1DNDiJb2PiYmJ+T/4DTfNiE/k/kV0AAAAAElFTkSuQmCC'} />
                <Tab image={true} src={ControlCenterLogo} onClick={()=>{(controlCenterTag)?dispatch(toggleControlCenterTag(false)):dispatch(toggleControlCenterTag(true)); dispatch(toggleWifiMenu(false)); dispatch(toggleAppleMenuTag(false)); dispatch(toggleBatteryMenu(false)); dispatch(toggleSidebarMenu(false));}} />
                <Tab onClick={()=>{(sidebarMenu)?dispatch(toggleSidebarMenu(false)):dispatch(toggleSidebarMenu(true)); dispatch(toggleWifiMenu(false)); dispatch(toggleAppleMenuTag(false)); dispatch(toggleBatteryMenu(false)); dispatch(toggleControlCenterTag(false))}} text={clock} />
            </div>
        </div>
    )
}


function Tab({text, bold=false, image=false, src=null, paddingLeft=0, paddingRight=0, height='1rem', onClick=null}){
    if(image){
        return(
            <div style={{paddingLeft:paddingLeft, paddingRight:paddingRight}} className='apple-logo' onClick={onClick}>
                <img style={{height:height}} src={src} />
            </div>
        )
    }
    if(bold){
        return (
            <div className='tab' onClick={onClick}>
                <b>{text}</b>
            </div>
        )
    }
    return (
        <div className='tab' onClick={onClick}>
            {text}
        </div>
    ) 
}