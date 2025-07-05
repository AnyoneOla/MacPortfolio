import './App.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Topbar from './components/Topbar/Topbar'
import AppleMenu from './components/AppleMenu/AppleMenu'
import ControlCenterMenu from './components/ControlCenterMenu/ControlCenterMenu'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import Dock from './components/Dock/Dock'
import GetBackground from './components/BGs/BGs'
import Netflix from './components/Netflix/Netflix'
import Prime from './components/Prime/Prime'
import GPT from './components/GPT/GPT'
import Facetime from './components/Facetime/Facetime'
import Notes from './components/Notes/Notes'
import Maps from './components/Maps/Maps'
import BetteryMenu from './components/BetteryMenu/BatteryMenu'
import WifiMenu from './components/WifiMenu/WifiMenu'
import Sidebar from './components/Sidebar/Sidebar'
import LockScreen from './components/Lockscreen/LockScreen'
import PowerOnLoader from './components/PowerOnLoader/PowerOnLoader'
import { toggleAppleMenuTag } from './features/globalSlice'

function App() {
  const dispatch = useDispatch()
  const appleMenuTag = useSelector((state)=>state.global.appleMenuTag);
  const controlCenterTag = useSelector((state)=>state.global.controlCenterTag);
  const apps = useSelector((state)=>state.global.apps);
  const fullscreen = useSelector((state)=>state.global.fullscreen);
  const brightness = useSelector((state)=>state.global.brightness);
  const rebootTag = useSelector((state)=>state.global.rebootTag);
  const [appArr, setAppArr] = useState([]);
  const loading = useSelector((state)=>state.global.loading)


  useEffect(()=>{
    if(fullscreen){
        document.documentElement.requestFullscreen();
    }
    else{
      if (document.fullscreenElement) {
        document.exitFullscreen();
            document.exitFullscreen();
        }
    }
  }, [fullscreen]);

  useEffect(()=>{
    document.getElementById('root').style.filter = `brightness(${brightness/100})`;
  }, [brightness])

  useEffect(()=>{
    setAppArr((x)=>[]);
    apps.forEach(app => {
      if(app.name==='Notes'){
        setAppArr((x)=>[...x, <Notes key={app.name} />])
      }
      if(app.name==='Netflix'){
        setAppArr((x)=>[...x, <Netflix key={app.name} />])
      }
      if(app.name==='GPT'){
        setAppArr((x)=>[...x, <GPT key={app.name} />])
      }
      if(app.name==='Prime'){
        setAppArr((x)=>[...x, <Prime key={app.name} />])
      }
      if(app.name==='Facetime'){
        setAppArr((x)=>[...x, <Facetime key={app.name} />])
      }
      if(app.name==='Maps'){
        setAppArr((x)=>[...x, <Maps key={app.name} />])
      }
    });
  }, [apps])

  useEffect(()=>{
    dispatch(toggleAppleMenuTag())
  }, [loading])


  return (
    <>
      <GetBackground />
      <Topbar />
      {(appleMenuTag)?<AppleMenu />:<></>}
      {(controlCenterTag)?<ControlCenterMenu />:<></>}
      <MusicPlayer />  
      <Sidebar />  
      <Dock />
      {appArr}
      <BetteryMenu />
      <WifiMenu />
      {(rebootTag)?<LockScreen />:<></>}
      {(loading)?<PowerOnLoader />:<></>}
      
    </>
  )
}

export default App
