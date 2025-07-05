import { useSelector } from "react-redux"

export default function BatteryMenu(){

    const showMenu = useSelector((state)=>state.global.batteryMenu);

    if(showMenu){
        return (
            <div style={{position:'fixed', top:'2.05rem', right:'13rem', width:'200px', borderRadius:'8px', backgroundColor:' rgba(35, 35, 35, 0.63)', backdropFilter:'blur(10px)', fontSize:'0.8rem', border:'1px solid rgba(130, 130, 130, 0.3)', padding:'10px', color:'white'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div>
                        <b>Battery</b>
                    </div>
                    <div>
                        75%
                    </div>
                </div>
                <div style={{fontSize:'0.65rem', fontColor:'#C8C8C8', marginTop:'5px'}}>
                    Power Source : Battery
                </div>
                <div style={{fontSize:'0.65rem', fontColor:'#C8C8C8', marginTop:'3px'}}>
                    Low Power Mode : OFF
                </div>
            </div>
        )
    }
    else{
        return (
            <></>
        )
    }
}