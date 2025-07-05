import './LockScreen.css'
import GetBackground from '../BGs/BGs';
import memoji from '../../assets/memoji.png'
import { useEffect, useState } from 'react';
import { setReboot } from '../../features/globalSlice';
import { useDispatch } from 'react-redux';

export default function LockScreen(){
    const now = new Date();
    const dispatch = useDispatch()
    const [time, setTime] = useState(()=>formatTime(now));
    const [date, setDate] = useState(()=>formatDate(now));


    useEffect(()=>{
        setInterval(()=>{
            const now = new Date();
            setDate(()=>formatDate(now));
            setTime(()=>formatTime(now))
        }, 5000);
    }, [time, date])



    return (
        <>
            <div onClick={()=>dispatch(setReboot(false))}>
                <GetBackground />
            </div>
            <div className='clock'>
                <div style={{fontSize:'15px'}}>{date}</div>
                <div style={{textAlign:'center', width:'400px'}}>
                    {time}
                </div>
                <div style={{fontSize:'10px', marginTop:'100px'}}>Click Anywhere to Start</div>
                
            </div>
            <div className="lockscreen-main">
                <div>
                    <div>
                        <img src={memoji} style={{height:'150px', width:'150px'}} />
                    </div>
                    <div style={{textAlign:'center', marginBottom:'10px', color:'rgba(255,255,255,0.9)', fontSize:'15px' }}>
                        Jeet Joshi
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <input style={{height:'20px', backgroundColor:'rgba(255,255,255,0.6)', border:'2px solid rgba(255,255,255,0.7)', borderRadius:'50px', color:'rgba(255,255,255,0.8)', padding:'5px'}} type="password" name="" id="" />
                    </div>
                </div>
            </div>
        </>
        
    )
}

function formatTime(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    // Pad with leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${hours}:${minutes}`;
}

function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    
    return `${dayName} ${day} ${monthName}`;
}