import Webcam from "react-webcam";
import Window from "../Window/Window";
import './Facetime.css'

export default function Facetime(){

    return (
        <Window appName={'Facetime'} content={
        <span>
            <span style={{position:'absolute', zIndex:'20', width:'300px', height:'100%', backdropFilter:' blur(30px)', backgroundColor:'rgba(30,30,30,0.93)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div>
                    <div style={{fontSize:'1.7rem', fontWeight:'100', textAlign:'center', marginTop:'-170px'}}>
                        FaceTime
                    </div>
                    <div style={{fontSize:'0.7rem', fontWeight:'300', textAlign:'center', marginTop:'10px', color:'#c8c8c8'}}>
                        Sign in with your Apple ID in order to
                    </div>
                    <div style={{fontSize:'0.7rem', fontWeight:'300', textAlign:'center', color:'#c8c8c8'}}>
                        activate FaceTime
                    </div>
                    <div style={{fontSize:'0.7rem', fontWeight:'500', textAlign:'center', color:'rgb(21, 142, 255)', marginTop:'20px'}}>
                        Learn more about FaceTime
                    </div>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'60px'}}>
                        <input type="text" placeholder="Email or Phone Number" style={{height:'2rem', width:'15rem', borderRadius:'5px', backgroundColor:'rgba(30,30,30,0.93)', border:'0.5px solid #c8c8c8', padding:'8px', color:'white'}} />
                    </div>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'15px'}}>
                        <div style={{width:'8rem', height:'1.5rem', textAlign:'center', borderRadius:'4px', backgroundColor:'#69655B', display:'flex', alignItems:'center', justifyContent:'center', color:'#c8c8c8'}}>
                            Next
                        </div>
                    </div>
                    <div style={{fontSize:'0.7rem', fontWeight:'500', textAlign:'center', color:'rgb(21, 142, 255)', marginTop:'50px'}}>
                        Create new Apple ID
                    </div>
                    <div style={{fontSize:'0.7rem', fontWeight:'500', textAlign:'center', color:'rgb(21, 142, 255)', marginTop:'20px'}}>
                        Forgot Apple ID or password?
                    </div>
                </div>
            </span>
            <span>
                <div className="webcam-container">
                    <Webcam className="webcam" />
                </div>
            </span>
        </span>
        
        } />
    )
}