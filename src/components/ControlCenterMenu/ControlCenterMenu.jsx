import './ControlCenterMenu.css'
import { useEffect, useState } from 'react';
import SoFarAway from '../../assets/music.png'
import { FaPlay, FaPause } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { toggleAirdrop, toggleBluetooth, toggleWifi } from '../../features/controlCenterSlice'
import { toggleDarkmode, toggleFullscreen, toggleMusic, changeBrightnessLevel, changeSoundLevel, setBgId } from '../../features/globalSlice';

export default function ControlCenterMenu(){    

    const dispatch = useDispatch()
    const wifi = useSelector((state)=>state.controlCenter.wifi);
    const bluetooth = useSelector((state)=>state.controlCenter.bluetooth);
    const airdrop = useSelector((state)=>state.controlCenter.airdrop);
    const darkmode = useSelector((state)=>state.global.darkmode);
    const fullscreen = useSelector((state)=>state.global.fullscreen);
    const musicPlay = useSelector((state)=>state.global.musicPlay);    
    const max_bg_id = useSelector((state)=>state.global.max_bg_id);
    const bg_id = useSelector((state)=>state.global.bg_id);

    return (
        <div className='control-center-menu-main' >
            <div className='control-center-row'>
                <div className='control-center-column'>
                    <div className='wifi-item' style={{marginTop:'3px'}}>
                        <div className='icon' style={{backgroundColor: wifi?'rgb(50,120,255)':'rgb(122, 123, 125)'}} onClick={()=>{dispatch(toggleWifi())}}>
                            <img style={{height:'1.1rem'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCUlEQVR4nO2Zz28MYRjHp0X9aEoXkW6laJOm4tD/QLIOfl1I3KQqYsvJRQgJF26V9KJcxEUkDqwfTQjiQIKkEVJUQtKVIKmgkroIau1+5ImHTrYzszOzszuzMZ9kLu+8z/t+vzvvj+d91zBiYmJiYmoRoA5YA6SBE8AVYBR4C0wCP/WZ1LJRrdMP7NbYurDELwJ2AVeBCcpnQs3tBBZWw8AG4DLwncrxDcgA64MWPxvoAZ5SfUaA7cCsck2sA54TPq+ATX4MJHXMRo2MaHNrYiPwgejyGdhSai6cAgpEnwIwKJqLTTQBt8poOK9zSRrfA6SAdiABzNEnoWUprTOoMRLrl5ui3TwfRnyKv6eilnieiNM/4lJgr7aV96FDtCeloWseA2UPOQN0+RXvYKoLOAv88KhpSIKXAS9dBlwHVgVtwMLQcuC8y/ma/beSAW3AG4fKkiOlSnS+GNgKDOjYzVrkWmP6bkDrJlzsY+8cdInmtuKgDmDcovJFoNmmowZgB3AbyOGdnBqTzKHBpo9m3T+KEa0ddr/AauCjqfIxq8wUmAscAN4THCJsv5UhzbCPm+p+Eq1OX1OCurVi2ub9Zh02lWLMLh3RtF+0dTuaMAU0WZTNB05XacMs6OY8z40218g+ATyk+jySVdW38CIT7RUeSqV4LRqCMCJJ5FSIRqZEQ1BfZZvL5fUX8AA4BKwFOoFGfTq17LDWkbqlyEnfgZgwmelxyIUkpTgJtHhoL6mJo93XzkufgZowdd5nsWpJ1ryijDZX6oZqRvroC1b9zI73mTrrL/s8Pb3hyZD7+8UPBqO2dMcyB3odUoq0XhXJavdVn6yWpR1Snl5p2wgTTVuOAl9cTGJJII9IjBElgFZgGO88kTliRMjEOP6R2NawfRg6UeXE6JdzQL0RBYB64IIPE5kZNyFhI8swcMmDiSG5XTGiCH9OjDdcmLhjlaJHCj233HUwIceBRqMWABYA9y1MDJd1MArxz6DHJhPPSt2aRBZNV+Qm8IXcKBq1DNDiJb2PiYmJ+T/4DTfNiE/k/kV0AAAAAElFTkSuQmCC' />
                        </div>
                        <div style={{marginLeft:'0.6rem', marginTop:'5px'}}>
                            <div style={{fontSize:'13px', height:'15px', display:'flex', alignItems:'center', color:'#C8C8C8'}}>
                                Wifi
                            </div>
                            <div style={{marginTop:'3px', fontSize:'9px', height:'8px', display:'flex', alignItems:'center', color:'#C8C8C8'}}>
                                {wifi?'Home':'Off'}
                            </div>
                        </div>
                    </div>
                    <div className='wifi-item'>
                        <div className='icon' style={{backgroundColor: bluetooth?'rgb(50,120,255)':'rgb(122, 123, 125)'}} onClick={()=>{dispatch(toggleBluetooth())}}>
                            <img style={{height:'1.1rem'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO3au04VQRjA8Y9CCb2JggUCVtwSY4MolwSooPQVoOQSMGiwsCA+gIWPoT6C4RVIQKEQsOASTLiHUPAnA0M4Z883O0sMe2Y2/KuT2YF8vzPnVqzIff6Ap1KEgD/AM4k9rloDmqQAENM60CKxRnkbwHMpAMS0CbRKbKG3BbRJASDXmHaJJdLbBjqkABDTDtApoUdlX5W1XeBFtQft8lxPVgN8Udb/AS/zm7x8yE92iPcpe8oqWf+sYPZ8T8xdIkjDuCD22rwD8yovRBNwrAwxdRuIvb6g/J+/QG1emB7gUBniQ1YI8E75+/1qvLy8GBckGERWjAYBZpT9R0CvVDOg3w6SbFoDOk4inzf4f2B8HQDdElLAG8fLzJWB90mIcYU5yIjol5DDjzkOHnGd+QQCThWEWeuRWAImU05kTgqAiANDNkTYGGACOL8FJDwMMK4gtF/I2vfMrIQQMKYgToABZejXjo/mj9VGjDoQg/Z6WXYtLAwehAti17uDwKAjzJfdcGKfCgkCAzQDZ8pJDCl70yAPgZ8KZBGoywvztgRTcRI+iEX8UBDLQH0uiATG/IodSdlTAQEeAN8VxK/cESWDPvJcT+Y6iSXgsYSaMvA3B+KJhBz+fgMNEnoUAWFKQaxEgzClIOK6kYDKVqNDmBKIeO+C4Ka1aBGmQiBM9taNuO9DMQGNlw/uk8xdAOxVye3wRzhQAAAAAElFTkSuQmCC' />
                        </div>
                        <div style={{marginLeft:'0.6rem', marginTop:'5px'}}>
                            <div style={{fontSize:'13px', height:'15px', display:'flex', alignItems:'center', color:'#C8C8C8'}}>
                                Bluetooth
                            </div>
                            <div style={{marginTop:'3px', fontSize:'9px', height:'8px', display:'flex', alignItems:'center', color:'#C8C8C8'}}>
                                {bluetooth?'On':'Off'}
                            </div>
                        </div>
                    </div>
                    <div className='wifi-item' style={{marginBottom:'0.5rem'}}>
                        <div className='icon' style={{backgroundColor: airdrop?'rgb(50,120,255)':'rgb(122, 123, 125)'}} onClick={()=>{dispatch(toggleAirdrop())}}>
                            <img style={{height:'1.1rem'}} src='data:image/png;base64,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' />
                        </div>
                        <div style={{marginLeft:'0.6rem', marginTop:'5px'}}>
                            <div style={{fontSize:'13px', height:'15px', display:'flex', alignItems:'center', color:'#C8C8C8'}}>
                                Air-Drop
                            </div>
                            <div style={{marginTop:'3px', fontSize:'9px', height:'8px', display:'flex', alignItems:'center', color:'#C8C8C8'}}>
                                {airdrop?'Connected':'None'}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{height:'4.1rem', width:'9.2rem', backgroundColor:'rgba(46, 46, 46, 0.6)', marginTop:'0', borderRadius:'1rem', border:'0.2px solid rgba(190, 190, 190, 0.5)', display:'flex', alignItems:'center'}}>
                        <div className='icon' style={{marginTop:'0', marginLeft:'10px', backgroundColor: darkmode?'rgb(50,120,255)':'rgb(122, 123, 125)'}} onClick={(e)=>{dispatch(toggleDarkmode())}}>
                            <img style={{height:'1.1rem'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGklEQVR4nO3VTytEURzG8QmlxMKSITt5GZZmwULyBlghpXgVVmJHWbGXGi9FFhb+rWWUhZiPTkZM3Jl7zT23Wcx3fU7fc55+5zylUo9uA+MYLVJYxgmuMVCUdBk1n+wWJd1C3TdzRd20rplybOkYHv1mMLb41N+MxH4yrwni6ZjinQRp3OFCtYV4P6b4poX4Fv2xxC9asxJLXGsjvo8y3bjSnmrukeNCOvbQl6d4Q3rOcosdk3jLIH/Aai7R40h27nCACmYwjCFMYR6zaYu/3XRn4SkUT9pbVzJGnkSo1qWskW/ivQNp2LuWSfoFFv4Ze+jzxVIOVXmYMvqw5ji8jo6kP8EE1hs/1yWeG397KI9zbIdDNm3q0Q18AGTq331UfcmSAAAAAElFTkSuQmCC' />
                        </div>
                        <div style={{marginLeft:'0.6rem'}}>
                            <div style={{fontSize:'13px', height:'15px', display:'flex', alignItems:'center', color:'#C8C8C8'}}>
                                {darkmode?'Dark Mode':'Light Mode'}
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={{height:'4.1rem', width:'4.3rem', backgroundColor:'rgba(46, 46, 46, 0.6)', marginTop:'0.5rem', borderRadius:'1rem', border:'0.2px solid rgba(190, 190, 190, 0.5)', display:'flex', alignItems:'center'}}>
                            <div style={{width:'4.3rem'}}>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    <img style={{height:'1.7rem'}} onClick={()=>dispatch(setBgId((bg_id+1)%max_bg_id))} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjUlEQVR4nO2aPU7DQBBGp4Gz0HCZ3CnCSMClECdIkSYFFAlKwk9BinQPWTaS5T/hZTbZYed1trRPs1+cXa81Io7jOCcGuARugQ2wBorynuQC1YTbFJILVL98m1fJBQaQXMADYN+TwZvkAnDXE8C95AJwATxQPQnv5eSz2gYdx/m/AE/tFxvgyHSOjfE/PErq0PNmBxwCAvgac1oL4DMggI8xp7UAdgEB7Mac1gLYBASwHnNaC+AlIIDnMae1AFYBAazGnMkCzMuPG60AlgEBLBvjqZ1zMXTYmTWuFwEBLBrjZ6XzbBNyImHmfx0LD6BGcgUPoEIsHnUTJt6RGSNED0Ay8Zkr2ANQDtSJ1dCQui96Q0PqvugNDan7OvTI/7TYpO4zV/ApAthrNjTUC9XgV+Bz1xe9oWFg0bpJtuEC5YaGetsq6idBYxv0hgvHcXRhItZ95grW9pkrWNtnrmBtn7mCtX3mCtb2mStY22euYG2fuYK1fR2A7QT/1rqvA3D1y/a2sgfw2rrPcRzJkm8EEnzERhB1zAAAAABJRU5ErkJggg==' />
                                </div>
                                <div style={{marginTop:'0.3rem', color:'#C8C8C8', fontSize:'0.5rem', height:'0.5rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    Change
                                </div>
                                <div style={{color:'#C8C8C8', fontSize:'0.5rem', height:'0.5rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    Background
                                </div>
                            </div>
                        </div>
                        <div style={{height:'4.1rem', width:'4.3rem', backgroundColor:'rgba(46, 46, 46, 0.6)', marginTop:'0.5rem', borderRadius:'1rem', border:'0.2px solid rgba(190, 190, 190, 0.5)'}}>
                            <div style={{width:'4.3rem', marginTop:'0.5rem'}}>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    {
                                        (fullscreen)
                                        ?<img style={{height:'1.3rem', marginTop:'5.5px', marginBottom:'2px', marginLeft:'6px'}} onClick={()=>dispatch(toggleFullscreen())} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nO3aO05DMRBGYUNBiwQtG0FZGG0aXjvJCmgQC6AIUNDR5rKNE01kikjJlSfRDf+MfHpL88nJfckFuACegV90GoBHm620Bjyh24MHYnrrtogEzOpMg2fRpiIW3rk6ZOLoOyIWfUfEAu5SXLUsYF4yQFx1yIQBC+AFuAz90wKWdaz3Zowo5Ab4qaMZ6iok5CCMKmQH5mMUowxxYdQhezDXJSKkCRMFsgPzuYWJBBnFRIPsxRwDAc6AL/6/5bGQ8/rHiw1J89OSugwTCMLYvSQKhAw3RFqet9QhtD7OK0PwvJOoQsjwYkWWV13gO8vHhzfgNfznoIPqkBNEho/YwNw1lzBk03QLThTeuTpk4ug7kmBHhrpmVvQO1aw8i+xclGr3HogdPDPM384otDKE5+DZGhon/IxufD43AAAAAElFTkSuQmCC' />
                                        :<img style={{height:'1.7rem', marginTop:'1.5px', marginLeft:'2px'}} onClick={(e)=>dispatch(toggleFullscreen())} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVR4nO2WQQrAIAwE8zzfbQ6l37APmaLXKsSiUmrmnOyACFkRZzuAAFw8UcOuVvZSzrSI82CN+FJc5GJYLsggzHm4eOFTq+UjdYiH5jmO82GAEziW5+FHYod7nBr1RWdXn9CQx6llz/kdN5kFdx1zLsvRAAAAAElFTkSuQmCC' />
                                    }
                                </div>
                                {
                                    (fullscreen)
                                    ?<>
                                        <div style={{marginTop:'0.3rem', color:'#C8C8C8', fontSize:'0.5rem', height:'0.5rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            Exit
                                        </div>
                                        <div style={{color:'#C8C8C8', fontSize:'0.5rem', height:'0.5rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            Full-Screen
                                        </div>
                                    </>
                                    :<>
                                        <div style={{marginTop:'0.3rem', color:'#C8C8C8', fontSize:'0.5rem', height:'0.5rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            Full-Screen
                                        </div>
                                        <div style={{color:'#C8C8C8', fontSize:'0.5rem', height:'0.5rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            Mode
                                        </div>
                                    </>
                                    
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{margin:'0.5rem', height:'4.5rem', borderRadius:'1rem', backgroundColor:'rgba(46, 46, 46, 0.6)', border:'0.2px solid rgba(190, 190, 190, 0.5)'}}>
                <div style={{marginTop:'1.2rem'}}>
                    <div style={{height:'0.5rem', fontSize:'0.8rem', color:'white', margin:'0.5rem', marginLeft:'1rem', marginTop:'-0.4rem', marginBottom:'1rem'}}>
                        Display
                    </div>
                    <div style={{marginLeft:'-0.7rem'}}>
                        <BrightnessSlider />
                    </div>
                </div>
            </div>

            <div style={{margin:'0.5rem', height:'4.5rem', borderRadius:'1rem', backgroundColor:'rgba(46, 46, 46, 0.6)', border:'0.2px solid rgba(190, 190, 190, 0.5)'}}>
                <div style={{marginTop:'1.2rem'}}>
                    <div style={{height:'0.5rem', fontSize:'0.8rem', color:'white', margin:'0.5rem',marginLeft:'1rem', marginTop:'-0.4rem', marginBottom:'1rem'}}>
                        Sound
                    </div>
                    <div style={{marginLeft:'-0.7rem'}}>
                        <SoundSlider />
                    </div>
                </div>
            </div>

            <div style={{margin:'0.5rem', height:'4.5rem', borderRadius:'1rem', backgroundColor:'rgba(46, 46, 46, 0.6)', border:'0.2px solid rgba(190, 190, 190, 0.5)', display:'flex', alignItems:'center'}}>
                <div>
                    <img style={{height:'3.5rem', margin:'0.5rem', marginTop:'0.7rem', borderRadius:'10px'}} src={SoFarAway} />
                </div>
                <div style={{marginLeft:'0.5rem'}}>
                    <div style={{height:'1.5rem', display:'flex', alignItems:'center', fontSize:'1rem', color:'#C8C8C8'}}>
                        So Far Away
                    </div>
                    <div style={{height:'1rem', display:'flex', alignItems:'center', fontSize:'0.7rem', color:'#C8C8C8'}}>
                        Martin Garrix / David Guetta
                    </div>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div name='brightnessEffect' style={{marginLeft:'2rem'}} onClick={(e)=>dispatch(toggleMusic())}>{musicPlay ? <FaPause color='white' /> : <FaPlay color='white' />}</div>
                </div>
            </div>
        </div>
    )
}



const BrightnessSlider = () => {
    const dispatch = useDispatch();
    const brightness = useSelector((state)=>state.global.brightness);

    useEffect(() => {
        const fillElement = document.querySelector('.custom-slider .primary1');
        const knobElement = document.querySelector('.custom-slider .knob1');

        const updateSlider = (value) => {
            const percent = value + '%';
            fillElement.style.width = percent;
            knobElement.style.left = percent;
        };

        updateSlider(brightness);
    }, [brightness]); 

    const handleSliderChange = (e) => {
        dispatch(changeBrightnessLevel(e.target.value));
    };

    return (
        <div className="slider">
            <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={handleSliderChange}
                id="slider-input"
            />
            <div className="custom-slider">
                <div className="track"></div>
                <div className="fill primary1"></div>
                <div className="knob1"></div>
            </div>
        </div>
    );
};


const SoundSlider = () => {
    const dispatch = useDispatch();
    const sound = useSelector((state)=>state.global.sound);

    useEffect(() => {
        const fillElement = document.querySelector('.custom-slider .primary2');
        const knobElement = document.querySelector('.custom-slider .knob2');

        const updateSlider = (value) => {
            const percent = value + '%';
            fillElement.style.width = percent;
            knobElement.style.left = percent;
        };

        updateSlider(sound);
    }, [sound]); 

    const handleSliderChange = (e) => {
        dispatch(changeSoundLevel(e.target.value));
    };

    return (
        <div className="slider">
            <input
                type="range"
                min="0"
                max="100"
                value={sound}
                onChange={handleSliderChange}
                id="slider-input"
            />
            <div className="custom-slider">
                <div className="track"></div>
                <div className="fill primary2"></div>
                <div className="knob2"></div>
            </div>
        </div>
    );
};