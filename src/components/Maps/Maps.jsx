import { useEffect } from "react";
import Window from "../Window/Window";

export default function Maps(){

    return (
        <Window appName={'Maps'} content={
        <>
            <iframe
                title="Embedded Page"
                src="https://subhampreet.github.io/Google-Map-Clone/"
                style={{position:'absolute',top:'30px', height:'calc(100% - 30px)', width:'100%', borderRadius:'10px', border:'0px solid black'}}
                allowFullScreen
                >
            </iframe>  
        </>
        } />
    )
}