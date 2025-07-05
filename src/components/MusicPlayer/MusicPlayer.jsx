import { useSelector, useDispatch } from "react-redux"
import SoFarAway from '../../assets/so_far_away.mp3'
import { useEffect, useRef } from "react"


export default function MusicPlayer(){
    const musicPlayerRef = useRef(null);
    const musicPlay = useSelector((state)=>state.global.musicPlay);
    const sound = useSelector((state)=>state.global.sound);

    useEffect(()=>{
        musicPlayerRef.current.volume = sound/100;
    }, [sound]);

    useEffect(()=>{
        if(musicPlay){
            musicPlayerRef.current.play();
        }
        else{
            musicPlayerRef.current.pause();
        }
    }, [musicPlay]);

    return (
        <audio ref={musicPlayerRef} src={SoFarAway} loop></audio>
    )
}