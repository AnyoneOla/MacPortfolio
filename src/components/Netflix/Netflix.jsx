import { useEffect } from "react";
import Window from "../Window/Window";

export default function Netflix(){

    return (
        <Window appName={'Netflix'} content={
        <>
            <iframe
                title="Embedded Page"
                src="https://anyoneola.github.io/netflix-clone/"
                style={{position:'absolute',top:'30px', height:'calc(100% - 30px)', width:'100%', borderRadius:'10px', border:'0px solid black'}}
                allowFullScreen
                >
            </iframe>  
        </>
        } />
    )
}