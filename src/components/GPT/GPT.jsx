import Window from "../Window/Window";

export default function GPT(){

    return (
        <Window appName={'GPT'} content={
        <>
            <iframe
                title="Embedded Page"
                src="https://anyoneola.github.io/GPT4o_Clone_GumRoad_Style/"
                style={{position:'absolute',top:'30px', height:'calc(100% - 30px)', width:'100%', borderRadius:'10px', border:'0px solid black'}}
                allowFullScreen
                >
            </iframe>  
        </>
        } />
    )
}