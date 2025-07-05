import React, { useState } from 'react';
import finder from "../../assets/finder.png"
import facetime from "../../assets/facetime.png"
import Apple_Music from "../../assets/Apple_Music.png"
import notes from "../../assets/notes.png"
import vscode from "../../assets/vscode.png"
import netflix from "../../assets/netflix.png"
import chat from "../../assets/chat.png"
import prime from "../../assets/prime.png"
import safari from "../../assets/safari.png"
import terminal from "../../assets/terminal.png"
import launchpad from "../../assets/launchpad.png"
import github from "../../assets/github.png"
import mail from "../../assets/mail.png"
import maps from "../../assets/maps.png"
import linkedin from "../../assets/linkedin.png"
import './Dock.css'; 
import { addApp } from '../../features/globalSlice'
import { useDispatch } from 'react-redux';
import Notes from '../Notes/Notes';

const Dock = () => {
  const minHeight = 60;
  const maxHeight = 100;
  const dispatch = useDispatch();

  const [heights, setHeights] = useState(
    new Array(20).fill(minHeight)
  );

  // Function to calculate the new height of each image based on mouse distance
  const heightFunction = (distance) => {
    const clamp = (a, b, x) => Math.min(b, Math.max(a, x));
    return clamp(minHeight, maxHeight, maxHeight - distance / 7);
  };

  // Event handler for mouse movement over the dock
  const handleMouseMove = (event) => {
    const { clientX: mouseX } = event;
    const dock = document.querySelector('.apple-dock');
    const newHeights = Array.from(dock.children).map((li) => {
        const img = li.children[0];
        const div = li.children[1];
        if(event.target == img){
            div.style.display = 'block';
        }
        else{
            div.style.display = 'none'
        }
        const { x, width } = img.getBoundingClientRect();
        const distance = Math.abs(mouseX - (x + width / 2));
        return heightFunction(distance);
    });
    setHeights(newHeights);
  };

  const handleMouseEnter = () => {
    setHeights(new Array(20).fill(maxHeight));
    

  };

  const handleMouseLeave = (event) => {
    const dock = document.querySelector('.apple-dock');
    const newHeights = Array.from(dock.children).map((li) => {
        const img = li.children[0];
        const div = li.children[1];
        div.style.display = 'none'
    })
setHeights(new Array(20).fill(minHeight));
  };

  return (
    <div style={{position:'fixed', top:'calc(100vh - 85px)', display:'flex', transform:'translate(50%)', width:'100vw'}}>
        <div style={{position:'relative'}}>
            <ul
                className="apple-dock"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <li key={0}>
                <img
                    src={finder}
                    alt=""
                    style={{ height: `${heights[0]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #1B86F4`}}>
                    Finder
                </div>
                </li>
                <li key={1}>
                <img
                    src={launchpad}
                    alt=""
                    style={{ height: `${heights[1]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px rgb(150,158,158)`}}>
                    Launchpad
                </div>
                </li>
                <li key={2}>
                <img
                    src={safari}
                    alt=""
                    style={{ height: `${heights[2]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #24A8F3`}}>
                    Safari
                </div>
                </li>
                <li key={3} onClick={()=>{
                    dispatch(addApp({name:'Notes'}))
                }}>
                <img
                    src={notes}
                    alt=""
                    style={{ height: `${heights[3]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #FFCE1F`}}>
                    Notes
                </div>
                </li>
                <li key={4} onClick={()=>{
                    dispatch(addApp({name:'Facetime'}))
                }}>
                <img
                    src={facetime}
                    alt=""
                    style={{ height: `${heights[4]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #47E763`}}>
                    FaceTime
                </div>
                </li>
                <li key={5} onClick={()=>{
                    dispatch(addApp({name:'Netflix'}))
                }}>
                <img
                    src={netflix}
                    alt=""
                    style={{ height: `${heights[5]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #E10109`}}>
                    Netflix
                </div>
                </li>
                <li key={6} onClick={()=>{
                    dispatch(addApp({name:'Prime'}))
                }}>
                <img
                    src={prime}
                    alt=""
                    style={{ height: `${heights[6]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #1ABAEA`}}>
                    Prime
                </div>
                </li>
                <li key={7} onClick={()=>{
                    dispatch(addApp({name:'GPT'}))
                }}>
                <img
                    src={chat}
                    alt=""
                    style={{ height: `${heights[7]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #E3E3E3`}}>
                    ChatGPT
                </div>
                </li>
                <li key={8} onClick={()=>{
                    dispatch(addApp({name:'Maps'}))
                }}>
                <img
                    src={maps}
                    alt=""
                    style={{ height: `${heights[8]}px`, transition: 'max-height 0.2s' }}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #00DF57`}}>
                    Maps
                </div>
                </li>
                <li key={9}>
                <img
                    src={linkedin}
                    alt=""
                    style={{ height: `${heights[9]}px`, transition: 'max-height 0.2s', borderRadius:'25%' }}
                    onClick={() => window.open('https://www.linkedin.com/in/jeet-joshi-292979188/', '_blank', 'noopener,noreferrer')}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #0275B4`}}>
                    Linkedin
                </div>
                </li>
                <li key={10}>
                <img
                    src={mail}
                    alt=""
                    style={{ height: `${heights[10]}px`, transition: 'max-height 0.2s', borderRadius:'25%' }}
                    onClick={() => window.location.href = 'mailto:jeetjoshi2000@gmail.com'}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #1E6CF1`}}>
                    Mail
                </div>
                </li>
                <li key={11}>
                <img
                    src={github}
                    alt=""
                    style={{ height: `${heights[11]}px`, transition: 'max-height 0.2s', borderRadius:'25%' }}
                    onClick={()=>window.open('https://github.com/AnyoneOla', '_blank', 'noopener,noreferrer')}
                />
                <div className='tooltip-appname' style={{boxShadow:`0px 0px 50px #8D31AB`}}>
                    Github
                </div>
                </li>
            </ul>
        </div>
    </div>
    
  );
};


function AppName({name, color='black'}){
    return (<></>
        // <div style={{fontSize:'12px', textAlign:'center', color:'rgba(230,230,230,1)', marginLeft:'2px', marginRight:'2px', opacity:'0', marginBottom:'-80px'}}>
        //     <div style={{position:'relative', marginBottom:'53px', backgroundColor:'rgba(34,34,34,0.6)', borderRadius:'5px', paddingTop:'5px', paddingBottom:'5px',border:'1px solid rgba(90, 90, 90, 0.6)', boxShadow:`0px 0px 50px ${color}`}}>
        //         {name}
        //     </div>
        // </div>
    )
}

export default Dock;


// const minHeight = 60;
// const maxHeight = 110;

// const name = (<div onMouseMove={(event)=>{event.stopPropagation();}} style={{fontSize:'15px', textAlign:'center', color:'rgba(230,230,230,1)', marginLeft:'10px', marginRight:'10px', opacity:'0', marginBottom:'-10px'}}>
//                 <div style={{position:'relative', marginBottom:'20px', backgroundColor:'rgba(34,34,34,0.6)', borderRadius:'5px', padding:'5px'}}>
//                     LinkedIn
//                 </div>
//               </div>);

// const handleMouseMove = (event) => {
//     const dock = event.currentTarget; 
//     const { clientX: mouseX } = event;

//     let closestLi = null;
//     let minDistance = Infinity;

//     for (const li of dock.children) {
//         const img = li.children[1];
//         const { x, width } = img.getBoundingClientRect();
//         const distance = Math.abs(mouseX - (x + width / 2));
        
//         li.children[0].style.opacity = 0;
//         li.children[0].style.marginBottom = '-10px';

//         if (distance < minDistance) {
//             minDistance = distance;
//             closestLi = li;
//         }
        
//         img.style.setProperty('height', `${heightFunction(distance)}px`);
//     }

//     if (closestLi) {
//         closestLi.children[0].style.opacity = 1;
//     }
// }

// const handleMouseEnter = (event) => {
//     const dock = event.currentTarget;
//     for (const li of dock.children) {
//         li.children[0].style.opacity = 0;
//         li.children[0].style.marginBottom = '-80px';
//         const img = li.children[1];
//         img.style.setProperty('max-height', `${maxHeight}px`);   
//     }
    
// } 

// const handleMouseLeave = (event) => {
//     try{
//         const dock = event.currentTarget;
//         for (const li of dock.children) {
//             li.children[0].style.opacity = 0;
//             li.children[0].style.marginBottom = '-80px';
//             const img = li.children[1];
//             img.style.setProperty('max-height', `${minHeight}px`);
//         }
//     }
//     catch(e){

//     }
    
// }

// function heightFunction(distance) {
//     const clamp = (a, b, x) => Math.min(b, Math.max(a, x));
//     return clamp(minHeight, maxHeight, maxHeight - distance / 8);
// }


// export default function Dock() {

//     return (
//         <div style={{position:'fixed', marginTop:'calc(100vh - 4rem)', backgroundColor:'red', width:'100vw', display:'flex', justifyContent:'center'}}>
//             <ul name="brightnessEffect" className='app-dock' onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 <li name='0' onMouseMove={null}>
//                     <AppName name='Finder' color='#1B86F4' />
//                     <Icon name='finder' src={finder} />
//                 </li>
//                 <li>
//                     <AppName name='Launchpad' color='rgb(150,158,158)' />
//                     <Icon name='launchpad' src={launchpad}/>
//                 </li>
//                 <li>
//                     <AppName name='Safari' color='#24A8F3' />
//                     <Icon name='safari' src={safari}/>
//                 </li>
//                 <li>
//                     <AppName name='Notes' color='#FFCE1F' />
//                     <Icon name='notes' src={notes}/>
//                 </li>
//                 <li>
//                     <AppName name='Facetime' color='#47E763' />
//                     <Icon name='facetime' src={facetime} />
//                 </li>
//                 <li>
//                     <AppName name='Netflix' color='#E10109' />
//                     <Icon name='netflix' src={netflix} />
//                 </li>
//                 <li>
//                     <AppName name='Prime' color='#1ABAEA' />
//                     <Icon name='prime' src={prime} />
//                 </li>
//                 <li>
//                     <AppName name=' GPT4o' color='#E3E3E3' />
//                     <Icon name='chat' src={chat} />
//                 </li>
//                 <li>
//                     <AppName name='Maps' color='#00DF57' />
//                     <Icon name='maps' src={maps} /> 
//                 </li>
//                 <li>
//                     <AppName name='Linkedin' color='#0275B4' />
//                     <Icon name='linkedin' src={linkedin} link='https://www.linkedin.com/in/jeet-joshi-292979188/' />
//                 </li>
//                 <li>
//                     <AppName name='Mail' color='#1E6CF1' />
//                     <Icon name='mail' src={mail} link='mailto:jeetjoshi2000@gmail.com' />
//                 </li>
//                 <li>
//                     <AppName name='Github' color='#8D31AB' />
//                     <Icon name='github' src={github} link='https://www.google.com' />
//                 </li>
//             </ul>
//         </div>
//     );
// }


// function Icon({name, src=null}) {
//     return (
//         <>
//         <img style={{margin:'5px'}} id={name} src={src} />
//         </>
        
//     )
// }

// function AppName({name, color='black'}){
//     return (
//         <div onMouseMove={(event)=>{event.stopPropagation();}} style={{fontSize:'12px', textAlign:'center', color:'rgba(230,230,230,1)', marginLeft:'2px', marginRight:'2px', opacity:'0', marginBottom:'-80px'}}>
//             <div style={{position:'relative', marginBottom:'20px', backgroundColor:'rgba(34,34,34,0.6)', borderRadius:'5px', paddingTop:'5px', paddingBottom:'5px',border:'1px solid rgba(90, 90, 90, 0.6)', boxShadow:`0px 0px 50px ${color}`}}>
//                 {name}
//             </div>
//         </div>
//     )
// }