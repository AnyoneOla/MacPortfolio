import { useEffect, useState } from 'react';
import Clock from '../Clock/Clock'
import { useSelector } from 'react-redux';

export default function Sidebar(){

    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const sidebarMenu = useSelector((state)=>state.global.sidebarMenu);


    useEffect(()=>{
        let calenderData = getCalender();
        setDate(calenderData.date);
        setDay(calenderData.day);
    }, []);

    return (
        <div style={{position:'fixed', top:'2rem', right:(sidebarMenu)?'0rem':'-23rem', height:'40rem', width:'23rem', padding:'1rem', transition: 'all 0.3s'}}>
            <div style={{display:'flex', justifyContent:'space-between', width:'22rem'}}>
                <div style={{width:'10rem', height:'10rem', backgroundColor:'#2F2E2D', borderRadius:'1.4rem', border:'0.2px solid black'}}>
                    <div style={{fontSize:'0.8rem', color:'red', margin:'1rem'}}>
                        {day}
                    </div>
                    <div style={{fontSize:'2rem', marginLeft:'1rem', marginTop:'-1rem', color:'white'}}>
                        {date}
                    </div>
                    <div style={{fontSize:'0.55rem', marginLeft:'1rem', marginTop:'2rem', color:'#C8C8C8'}}>
                        It's a Portfolio Visit Day
                    </div>
                </div>
                <div style={{width:'10rem', height:'10rem', background:'linear-gradient(to bottom, #1B4A85, #5589BD)', borderRadius:'1.4rem', border:'0.2px solid rgba(0,0,0,0.5)'}}>
                    <div style={{fontSize:'1rem', color:'white', margin:'1rem', fontWeight:'600'}}>
                        Bengaluru
                    </div>
                    <div style={{fontSize:'2rem', marginLeft:'1rem', marginTop:'-1rem', color:'white'}}>
                        25°
                    </div>
                    <div style={{fontSize:'0.8rem', marginLeft:'1rem', marginTop:'1.5rem', color:'white', fontWeight:'600'}}>
                        <div>
                            <img height={'15px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjElEQVR4nN2WXU7DMAzH89I/lL3CJAanQuNAg90DXrgHbCDEAwNtF2HNHGc8LCgd1TpY06TtxoclS1UT+xdbTmwh/pqwwpNWeNw5WCsYq/8DTBSfGCPiumBjREQUd3yhHSZoVphI2WoXgglDTRgUrVtbVhgzgWezg+NSsDFi3xrYaMrgJdDJp4+xMWIv2NAVlTMbVQ8uZautCfdMuFk7EEV9VnhhwixVhRFTdJkHWBtrWyVb32SucM6EJCuqr5quEbqiSZkvoYsiaA6+aAwu0/QWR7oBPk0ScVQbzBT1faEreHRRH6zwGgxWGAWVv86UMFxF7J/mfKH5+BYbFgc1wVMf306xd3ZrqXaJfRwqFFdP7Pw6KbwliTgUTYgmdAMekLNGoF/gU1ekjUDlskk8aMJV9s++SPZxYIVnJshU0++ol0+vJlxXahJyvS3ehh5aE+6C26IxIs418aYGgdhr3mLCuzVwQcvG29zoMw+Zu07tCOTakxWVa4/1YX15QX3FB7wV0T8GJvd4+2vlA1QSCtjiuKv7AAAAAElFTkSuQmCC" alt="sun--v1" />
                        </div>
                        <div>
                            Mostly Sunny
                        </div>
                        <div>
                            H:28° L:19°
                        </div>
                    </div>
                </div>
                <div>
                    {/* Upcomming Things */}
                </div>
            </div>
        </div>
    )
}

function getCalender(){
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    const data = Clock().split(' ')
    let Day, Date;
    days.forEach((day)=>{
        if (day.slice(0,3)===data[0]){
            Day = day;
        }
    })
    Date = data[1]

    return {
        date : Date,
        day : Day
    }
}